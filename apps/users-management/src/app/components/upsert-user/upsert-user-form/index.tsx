import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { StepperStatus } from "../../../enums";
import {
  IUserInfo,
  IUserUpsertFormValues,
  defalutUserUpsertRequest,
} from "../../../interfaces";
import { useAppDispatch } from "../../../store";
import UpsertUserStepper from "../upsert-user-stepper";
import UpsertUserPasswordForm from "../upsert-password-form";
import UpsertUserInfoForm from "../upsert-userinfo-form";
import {
  UpsertUserColWrapper,
  UpsertUserWrapper,
  UpsertUserColFromWrapper,
} from "./index.style";
import {
  createUser,
  fetchUsers,
  updatePassword,
  updateUser,
} from "../../../redux-modules/thunks/user";
import { toastSuccess, toastError } from "@users-platform/iceapple";
import { useIntl } from "react-intl";

export interface IUpsertUserFormProps {
  onClose: any;
  user?: IUserInfo;
  open: boolean;
  parentRef?: any;
  childRef?: any;
  editUser?: boolean;
}

const UpsertUserForm = forwardRef((props: IUpsertUserFormProps) =>{
  const [step, setStep] = useState(1);
  const [sentFailed, setSentFailed] = useState(false);
  const dispatch = useAppDispatch();
  const intl=useIntl();
  const [userInfo, setUserInfo] = useState<IUserUpsertFormValues>(
    defalutUserUpsertRequest
  );
  const [isBackStep,setIsBackStep] = useState(false);
  const [passwordStepperStatus, setPasswordStepperStatus] = useState(
    StepperStatus.WAIT
  );
  const [userInfoStepperStatus, setUserInfoPasswordStepperStatus] = useState(
    StepperStatus.PROCESS
  );

  useEffect(() => {
    setStep(1);
  }, [props.open]);

  useEffect(() => {
    if (props.user) {
      setUserInfo({
        countryCode: props.user.mobile.split("-")[0],
        mobile: props.user.mobile.split("-")[1],
        roleIds: props.user.roles ? props.user.roles.map((x) => x.id || 0) : [],
        siteIds: props.user.sites ? props.user.sites.map((x) => x.id || 0) : [],
        password: props.user.password,
        statusCode: props.user?.statusCode,
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        email: props.user.email,
        gender: props.user.gender,
        userName: props.user.userName,
        departmentId: props.user.departmentId || 0,
        id: props.user.id,
      });
    }
  }, [props.user]);

  useImperativeHandle(props.parentRef, () => { 
    return{
      resetFormStep() {
      setStep(1);
    }
  };
  },[]);

  const onPasswordNext = async (password: string) => {
    if (props.user) {
      updatePawword(password);
      return;
    }
    setUserInfo((prev) => ({
      ...prev,
      ...{
        password: password,
      },
    }));
    const result = await dispatch(
      createUser({
        ...userInfo,
        ...{
          mobile: `${userInfo.countryCode}-${userInfo.mobile}`,
          password: password,
          departmentId: userInfo.departmentId,
        },
      })
    );
    if (createUser.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage({ id:"um.users.tableRow.createPopup.successMessage"}, {firstName: userInfo.firstName,lastName: userInfo.lastName}),
      });
      dispatch(fetchUsers());
      props.onClose();
      setStep(1);
    } else if (createUser.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message}),
      });
    }
  };

  const onUserInfoNext = async (userInfo: IUserUpsertFormValues) => {
    if (props.user) {
      updateUserInfo(userInfo); 
      return;
    }
    setUserInfo(userInfo);
    setStep(step + 1);
    setIsBackStep(false);
    setPasswordStepperStatus(StepperStatus.WAIT);
    setUserInfoPasswordStepperStatus(StepperStatus.FINISH);
    setSentFailed(!sentFailed);
  };

  const updateUserInfo = async (userInfo: IUserUpsertFormValues) => {
    const result = await dispatch(
      updateUser({
        ...userInfo,
        ...{
          mobile: `${userInfo.countryCode}-${userInfo.mobile}`,
          password: props.user?.password || "",
          departmentId: userInfo.departmentId,
          id: props.user?.id,
        },
      })
    );
    if (updateUser.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage({ id:"um.users.tableRow.updatePopUp.successMessage"}, {firstName: userInfo.firstName,lastName: userInfo.lastName}),
      });
      if(userInfo.isSitesChanged){
        window.parent.postMessage(
          {
            type: "sitesChange",
            message: "",
          },
          "*"
        );
      }
      dispatch(fetchUsers());
      props.onClose();
      setStep(1);
    } else if (updateUser.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message}),
      });
    }
  };

  const updatePawword = async (password: string) => {
    const result = await dispatch(
      updatePassword({
          password: password,
          id: props.user?.id,
      })
    );
    if (updatePassword.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage({ id:"um.users.tableRow.updatePopUp.successMessage"}, {firstName: userInfo.firstName,lastName: userInfo.lastName}),
      });
        dispatch(fetchUsers());
      props.onClose();
      setStep(1); 
    } else if (updatePassword.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message}),
      });
    }
  };

  const handleGoFirstStep = () =>{
    setStep(1);
    setIsBackStep(true);
    setUserInfoPasswordStepperStatus(StepperStatus.PROCESS);
    setPasswordStepperStatus(StepperStatus.WAIT);
  }

  const getUpsertUser = useMemo(() => {
    switch (step) {
      case 2:
        return (
          <UpsertUserPasswordForm onNext={onPasswordNext} failed={sentFailed} childRef={props.childRef} goToFirstStep={handleGoFirstStep}/>
        );
      case 1:
        return (
          <UpsertUserInfoForm
            user={userInfo}
            onNext={onUserInfoNext}
            onPasswordNext={() => setStep(2)}
            childRef={props.childRef}
            editUser={props.editUser}
            isBackStep = {isBackStep}
          />
        );
      default:
        return (
          <UpsertUserInfoForm
            user={userInfo}
            onNext={onUserInfoNext}
            onPasswordNext={() => setStep(2)}
            childRef={props.childRef}
            editUser={props.editUser}
            isBackStep = {isBackStep}
          />
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, sentFailed, userInfo, props.open]);

  return (
    <UpsertUserWrapper>
      {props.user ? (
        <UpsertUserColFromWrapper xs={24} sm={24} lg={24} xl={24}>
          {getUpsertUser}
        </UpsertUserColFromWrapper>
      ) : (
        <>
          <UpsertUserColWrapper xs={24} sm={24} lg={7} xl={7}>
            <UpsertUserStepper
              statuses={[userInfoStepperStatus, passwordStepperStatus]}
            />
          </UpsertUserColWrapper>
          <UpsertUserColFromWrapper xs={24} sm={24} lg={17} xl={17}>
            {getUpsertUser}
          </UpsertUserColFromWrapper>{" "}
        </>
      )}
    </UpsertUserWrapper>
  );
});

export default UpsertUserForm;

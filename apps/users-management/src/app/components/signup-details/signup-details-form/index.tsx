import { useMemo, useState } from "react";
import { StepperStatus } from "../../../enums";
import {
  IUserInfo,
} from "../../../interfaces";
//import { fetchUser } from '../../../redux-modules/thunks/user';
import { useAppDispatch } from "../../../store";
import SignUpDetailsStepper from "../signup-details-stepper";
import SignUpDetailsSuccess from "../signup-details-success";
import SignUpPasswordForm from "../signup-password-form";
import SignUpUserInfoForm from "../signup-userinfo-form";
import {
  SignUpDetailsContainer,
  SignUpDetailsColWrapper,
  SignUpDetailsWrapper,
  SignUpDetailsColFromWrapper,
} from "./index.style";
import { useNavigate } from "react-router-dom";

export function SignUpDetailsForm() {
  const [step, setStep] = useState(1);
  const [sentFailed, setSentFailed] = useState(false);
  const [passwordStepperStatus, setPasswordStepperStatus] = useState(
    StepperStatus.WAIT
  );
  const [userInfoStepperStatus, setUserInfoPasswordStepperStatus] = useState(
    StepperStatus.PROCESS
  );

  const navigate = useNavigate();

  const onPasswordNext = async (password: string, recaptcha: string) => {
    navigate("/signin");
  };

  const onUserInfoNext = async (userInfo: IUserInfo) => {
    setStep(step + 1);
    setPasswordStepperStatus(StepperStatus.WAIT);
    setUserInfoPasswordStepperStatus(StepperStatus.FINISH);
    setSentFailed(!sentFailed);
  };

  const getSignUpDetails = useMemo(() => {
    switch (step) {
      case 2:
        return (
          <SignUpPasswordForm onNext={onPasswordNext} failed={sentFailed} />
        );
      case 1:
        return <SignUpUserInfoForm onNext={onUserInfoNext} />;
      default:
        return <SignUpUserInfoForm onNext={onUserInfoNext} />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, sentFailed]);

  return (
    <SignUpDetailsContainer>
      <SignUpDetailsWrapper>
        {step !== 5 ? (
          <>
            <SignUpDetailsColWrapper xs={24} sm={24} lg={7} xl={7}>
              <SignUpDetailsStepper
                statuses={[userInfoStepperStatus, passwordStepperStatus]}
              />
            </SignUpDetailsColWrapper>
            <SignUpDetailsColFromWrapper xs={24} sm={24} lg={17} xl={17}>
              {getSignUpDetails}
            </SignUpDetailsColFromWrapper>
          </>
        ) : (
          <SignUpDetailsSuccess />
        )}
      </SignUpDetailsWrapper>
    </SignUpDetailsContainer>
  );
}

export default SignUpDetailsForm;

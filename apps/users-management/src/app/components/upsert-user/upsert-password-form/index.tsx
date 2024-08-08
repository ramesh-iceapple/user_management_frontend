import { Col, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IForm } from "../../../interfaces";
import { useAppDispatch } from "../../../store";
import {
  ConfirmPasswordWrapper,
  CreateButtonWrapper,
  FormRowWrapper,
  FormWrapper,
  NewPasswordWrapper,
  UpsertUserPasswordCard,
  UpsertUserPasswordHeaderText,
} from "./index.style";
import {
  PasswordInput,
  PrimaryButton,
  PrimaryOutlinedButton,
} from "@users-platform/iceapple";
import validation from "libs/iceapple/src/lib/utils/validation";
import { FormattedMessage, useIntl } from "react-intl";
import { UpsertUserUserInfoActionsWrapper } from "../upsert-userinfo-form/index.style";

const UpsertUserPasswordForm = forwardRef(({ onNext, failed,childRef,goToFirstStep }: IForm) => {
  const captchaRef = useRef(null);
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const onFinish = (values: any) => {
    onNext(values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleFormChange = () => {
    const hasErrors = form
      .getFieldsError()
      .some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  useImperativeHandle(childRef, () => { 
    return{
      resetFormFields() {
      form.resetFields();
    }
  };
  },[]);

  return (
    <UpsertUserPasswordCard>
      <>
        <Row align="middle" justify="center">
          <UpsertUserPasswordHeaderText>
            <FormattedMessage id="um.ChooseAPassword" />
          </UpsertUserPasswordHeaderText>
        </Row>
        <FormRowWrapper align="middle" justify="center">
          <FormWrapper
            name="UpsertUserEmail"
            onFieldsChange={handleFormChange}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <NewPasswordWrapper
              name="password"
              rules={[
                { required: true, message: "" },
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value && validation.validatePassword(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        intl.formatMessage({
                          id: "validation.choosePassword.error",
                        })
                      )
                    );
                  },
                }),
              ]}
            >
              <PasswordInput
                type="block"
                placeholder={intl.formatMessage({
                  id: "um.users.userInfoForm.password.placeHolder",
                })}
                label={intl.formatMessage({
                  id: "um.users.userInfoForm.password.label",
                })}
                height="40px"
              />
            </NewPasswordWrapper>
            <ConfirmPasswordWrapper
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        intl.formatMessage({
                          id: "validation.confirmPassword.error",
                        })
                      )
                    );
                  },
                }),
              ]}
            >
              <PasswordInput
                type="block"
                placeholder={intl.formatMessage({
                  id: "um.users.userInfoForm.confirmpassword.placeHolder",
                })}
                label={intl.formatMessage({
                  id: "um.users.userInfoForm.confirmPassword.label",
                })}
                height="40px"
              />
            </ConfirmPasswordWrapper>
            <UpsertUserUserInfoActionsWrapper>
              <Row gutter={[20, 0]}>
                <Col>
                  <CreateButtonWrapper>
                    <PrimaryOutlinedButton
                      htmlType="button"
                      id="backBtn"
                      onClick={() => goToFirstStep()}
                    >
                      <FormattedMessage id="backButton.text" />
                    </PrimaryOutlinedButton>
                  </CreateButtonWrapper>
                </Col>
                <Col>
                  <CreateButtonWrapper>
                    <PrimaryButton
                      htmlType="submit"
                      disabled={disabledCreate}
                      id="saveUser"
                    >
                      <FormattedMessage id="saveButton.text" />
                    </PrimaryButton>
                  </CreateButtonWrapper>
                </Col>
              </Row>
            </UpsertUserUserInfoActionsWrapper>
          </FormWrapper>
        </FormRowWrapper>
      </>
    </UpsertUserPasswordCard>
  );
});

export default UpsertUserPasswordForm;

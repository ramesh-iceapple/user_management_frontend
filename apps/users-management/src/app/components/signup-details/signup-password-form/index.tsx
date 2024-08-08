import { Row, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useRef, useState } from "react";
import { ISignUpDetailsForm } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../store";
import { CreateButtonWrapper } from "../../signup/signup-email-form/index.style";
import {
  ConfirmPasswordRecaptchaWrapper,
  ConfirmPasswordWrapper,
  FormRowWrapper,
  FormWrapper,
  NewPasswordHeader,
  NewPasswordWrapper,
  SignUpPasswordCard,
  SignUpPasswordForHeaderText,
  SignUpPasswordForText,
  SignUpPasswordForWrapper,
  SignUpPasswordHeaderText,
} from "./index.style";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_APP_SITE_KEY } from "../../../constants/common";
import { PasswordInput, PrimaryButton } from "@users-platform/iceapple";

const SignUpPasswordForm = ({ onNext, failed }: ISignUpDetailsForm) => {
  const captchaRef = useRef(null);
  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);
  const [isCaptchaSet, setIsCaptchaSet] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!captchaRef || !captchaRef.current) return;
    (captchaRef.current as any).reset();
    setIsCaptchaSet(false);
  }, [failed]);

  const onChange = (value: any) => {
    setIsCaptchaSet(!value ? false : true);
  };

  const onFinish = (values: any) => {
    onNext(values.password, (captchaRef.current as any).getValue());
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

  const [newPassword, setNewPasword] = useState("");

  return (
    <SignUpPasswordCard>
      <>
        <Row align="middle" justify="center">
          <SignUpPasswordHeaderText>Choose a Password</SignUpPasswordHeaderText>
        </Row>
        <SignUpPasswordForWrapper align="middle" justify="center">
          <SignUpPasswordForHeaderText>
            Choose your password for{" "}
          </SignUpPasswordForHeaderText>
        </SignUpPasswordForWrapper>
        <FormRowWrapper align="middle" justify="center">
          <FormWrapper
            name="signUpEmail"
            onFieldsChange={handleFormChange}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <NewPasswordWrapper
              name="password"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <PasswordInput
                type="block"
                onChange={(e: any) => setNewPasword(e.currentTarget.value)}
                placeholder="Enter Password"
                label="Choose Password"
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
                ({ getFieldValue }:{ getFieldValue:any }) => ({
                  validator(_:any, value:any) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <PasswordInput
                type="block"
                placeholder="Enter Password"
                label="Confirm Password"
                height="40px"
              />
            </ConfirmPasswordWrapper>
            <ConfirmPasswordRecaptchaWrapper>
              <ReCAPTCHA
                onChange={onChange}
                sitekey={RECAPTCHA_APP_SITE_KEY}
                ref={captchaRef}
              />
            </ConfirmPasswordRecaptchaWrapper>
            <CreateButtonWrapper>
              <PrimaryButton
                block
                htmlType="submit"
                disabled={disabledCreate || !isCaptchaSet}
              >
                Next
              </PrimaryButton>
            </CreateButtonWrapper>
          </FormWrapper>
        </FormRowWrapper>
      </>
      {/* )} */}
    </SignUpPasswordCard>
  );
};

export default SignUpPasswordForm;

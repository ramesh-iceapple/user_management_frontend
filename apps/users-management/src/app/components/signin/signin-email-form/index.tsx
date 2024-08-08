import { Alert, Form, Row } from "antd";
import {
  EmailCard,
  EmailContainer,
  FormRowWrapper,
  FormWrapper,
  SignInHeaderText,
  SignInTermConditionsText,
  SignInButtonWrapper,
  ForgetPasswordButtonWrapper,
  PasswordFormWrapper,
} from "./index.style";
import { useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { useAppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../redux-modules/thunks/user";
import { ISignIn } from "../../../interfaces";

import {
  PasswordInput,
  PrimaryButton,
  SecondaryLinkButton,
  TextInput,
  toastError,
  toastSuccess,
} from "@users-platform/iceapple";
import { logIn } from "../../../redux-modules/thunks/auth";
import { FormattedMessage, useIntl } from "react-intl";

const SignInEmailForm = ({ setMFAVerification }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const onFinish = async (values: any) => {
    const signInDetails: ISignIn = {
      email: values.email,
      //password: btoa(values.password),
      password: values.password,
    };
    const result = await dispatch(logIn(signInDetails));
    if (logIn.fulfilled.match(result)) {
      if (result.payload.isOtpEnabled) {
        setMFAVerification(signInDetails);
        return;
      }
      setDisabledSignIn(false);
      toastSuccess({ content: intl.formatMessage({ id: "login.successMessage"}) });
      await dispatch(fetchUser(result.payload.authToken));
      navigate("/users");
    } else if (logIn.rejected.match(result)) {
      setDisabledSignIn(true);
      toastError({ content: intl.formatMessage({ id: result.payload?.message}) });
      setErrorMessage(intl.formatMessage({ id: result.payload?.message}) || "");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = useForm();
  const [disabledSignIn, setDisabledSignIn] = useState(true);
  const intl = useIntl();

  const handleFormChange = () => {
    setErrorMessage("");
    const hasErrors = form
      .getFieldsError()
      .some((form: any) => form.errors.length);
    setDisabledSignIn(hasErrors);
  };

  return (
    <EmailContainer>
      <EmailCard>
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        <Row align="middle" justify="center">
          <SignInHeaderText>
            <FormattedMessage id="mitra-gaming-platform.login.title"/>
          </SignInHeaderText>
        </Row>
        <FormRowWrapper align="middle" justify="center">
          <FormWrapper
            name="signUpEmail"
            onFieldsChange={handleFormChange}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: intl.formatMessage({id: "validation.email.error"}),
                },
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <TextInput
                type="block"
                placeholder={intl.formatMessage({id:"mitra-gaming-platform.login.email.placeholder"})}
                label={intl.formatMessage({id:"mitra-gaming-platform.login.email"})}
              />
            </Form.Item>
            <PasswordFormWrapper
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
                placeholder={intl.formatMessage({id:"mitra-gaming-platform.login.password.placeholder"})}
                label={intl.formatMessage({id:"mitra-gaming-platform.login.password"})}
              />
            </PasswordFormWrapper>
            <ForgetPasswordButtonWrapper>
              <SecondaryLinkButton
                id="forgotPasswordBtn"
                type="link"
                htmlType="button"
                onClick={() => navigate("/forgotpassword")}
              >
                <FormattedMessage id="mitra-gaming-platform.login.forgotPassword" />
              </SecondaryLinkButton>
            </ForgetPasswordButtonWrapper>
            <SignInButtonWrapper>
              <PrimaryButton block htmlType="submit" id="signInBtn" disabled={disabledSignIn}>
                <FormattedMessage id="mitra-gaming-platform.login.signInBtn" />
              </PrimaryButton>
            </SignInButtonWrapper>
          </FormWrapper>
        </FormRowWrapper>
        <Row align="middle" justify="center">
          <SignInTermConditionsText>
          <FormattedMessage
            id="mitra-gaming-platform.login.termsText"
            values={{
              termsLink: (
                <a
                  href=""
                  title={"Terms of Service"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FormattedMessage id="mitra-gaming-platform.login.termsOfService" />
                </a>
              ),
              privacyPolicyLink: (
                <a
                  href=""
                  title={"Privacy Policy"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FormattedMessage id="mitra-gaming-platform.login.privacyPolicy" />
                </a>
              ),
            }}
          />
          </SignInTermConditionsText>
        </Row>
      </EmailCard>
    </EmailContainer>
  );
};

export default SignInEmailForm;

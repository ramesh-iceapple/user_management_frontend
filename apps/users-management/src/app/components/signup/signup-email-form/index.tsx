import { Form, Row } from 'antd';
import {
  EmailCard,
  EmailContainer,
  SignUpHeaderText,
  SignUpTrailSubText,
  CreateButtonWrapper,
  SignUpTermConditionsext,
  FormRowWrapper,
  FormWrapper,
  SignUpRecaptchaWrapper,
} from './index.style';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { ISignUpForm } from '../../../interfaces';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_APP_SITE_KEY } from '../../../constants/common';
import { PrimaryButton, TextInput } from '@users-platform/iceapple';

const SignUpEmailForm = ({ onNext, failed }: ISignUpForm) => {
  const captchaRef = useRef(null);
  const [isCaptchaSet, setIsCaptchaSet] = useState(false);

  useEffect(() => {
    (captchaRef.current as any).reset();
    setIsCaptchaSet(false);
  }, [failed]);

  const onChange = (value: any) => {
    setIsCaptchaSet(!value ? false : true);
  };
  const onFinish = (values: any) => {
    onNext(values.email, (captchaRef.current as any).getValue());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = useForm();
  const [disabledCreate, setDisabledCreate] = useState(true);

  const handleFormChange = () => {
    const hasErrors = form
      .getFieldsError()
      .some((form: any) => form.errors.length);
    setDisabledCreate(hasErrors);
  };

  return (
    <EmailContainer>
      <EmailCard>
        <Row align="middle" justify="center">
          <SignUpHeaderText>Sign up to Pantheon</SignUpHeaderText>
        </Row>
        <Row align="middle" justify="center">
          <SignUpTrailSubText>
            We will send you signup link to your account
          </SignUpTrailSubText>
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
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <TextInput
                type="block"
                placeholder="Enter email"
                label={'Email'}
              />
            </Form.Item>
            <SignUpRecaptchaWrapper>
              <ReCAPTCHA
                onChange={onChange}
                sitekey={RECAPTCHA_APP_SITE_KEY}
                ref={captchaRef}
              />
            </SignUpRecaptchaWrapper>
            <CreateButtonWrapper>
              <PrimaryButton
                block
                htmlType="submit"
                disabled={disabledCreate || !isCaptchaSet}
              >
                Create Account
              </PrimaryButton>
            </CreateButtonWrapper>
          </FormWrapper>
        </FormRowWrapper>
        <Row align="middle" justify="center">
          <SignUpTermConditionsext>
            By creating an account you are agreeing to our{' '}
            <a
              title={'Terms of Service '}
              target={'_blank'}
              rel="noreferrer"
            >
              {'Terms of Service '}
            </a>
            and
            <a
              title={'Privacy Policy'}
              target={'_blank'}
              rel="noreferrer"
            >
              {' Privacy Policy'}
            </a>
            .
          </SignUpTermConditionsext>
        </Row>
      </EmailCard>
    </EmailContainer>
  );
};

export default SignUpEmailForm;

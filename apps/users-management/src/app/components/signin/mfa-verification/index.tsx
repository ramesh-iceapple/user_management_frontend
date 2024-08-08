import { Alert, Form, Row } from 'antd';
import {
  EmailCard,
  EmailContainer,
  FormRowWrapper,
  FormWrapper,
  SignInHeaderText,
  SignInButtonWrapper,
  MFACodeHeaderText,
  MFAEmailHeaderText,
  MFACodeValidationHeaderText,
  MFACodeDescription,
  MFACodeResend,
  MFACodeResendTimer,
  ResendCodeButtom,
  MFAVerifyIconRow,
} from './index.style';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { useAppDispatch, useAppSelector } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../redux-modules/thunks/user';
import { getIsignInResponseSelector } from '../../../redux-modules/selectors/auth';
import moment from 'moment';
import { ISignIn } from '../../../interfaces';
import { toastSuccess, toastError, TextInput, PrimaryButton } from '@users-platform/iceapple';

export interface IMFAVerificationProps {
  signInDetails: ISignIn;
  setMFAEnabled: () => void;
}

const MFAVerification = ({
  signInDetails,
  setMFAEnabled,
}: IMFAVerificationProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    isMFAVerified,
    otpResendWaitingInMins,
    otpNoOfDigitis,
    otpExpiryInMins,
  } = useAppSelector(getIsignInResponseSelector);

  const onFinish = async (values: any) => {
    setErrorMessage('');
    
  };

  const resendCode = async () => {
    setErrorMessage('');
    form.resetFields();
    setDisabledVerify(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = useForm();
  const [disabledVerify, setDisabledVerify] = useState(true);

  const handleFormChange = () => {
    setErrorMessage('');
    const hasErrors = form
      .getFieldsError()
      .some((form: any) => form.errors.length);
    setDisabledVerify(hasErrors);
  };

  const [resendTimerInterval, setResendTimerInterval] = useState(
    otpResendWaitingInMins || 0 * 60 + 1 || 30
  );

  const timeOutCallback = useCallback(
    () => setResendTimerInterval((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    resendTimerInterval > 0 && setTimeout(timeOutCallback, 1000);
  }, [resendTimerInterval, timeOutCallback]);

  return (
    <EmailContainer>
      <EmailCard>
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        <MFAVerifyIconRow align="middle" justify="center">
       
        </MFAVerifyIconRow>
        <Row align="middle" justify="center">
          <SignInHeaderText>Please Enter 2FA Code</SignInHeaderText>
        </Row>
        <Row align="middle" justify="center">
          <MFACodeHeaderText>
            {`we have sent you ${otpNoOfDigitis || 6} digit code to `}
            <MFAEmailHeaderText>{signInDetails.email}.</MFAEmailHeaderText>
          </MFACodeHeaderText>
        </Row>
        <Row align="middle" justify="center">
          <MFACodeValidationHeaderText>
            {`This code will be valid for ${otpExpiryInMins || 5} minutes.`}
          </MFACodeValidationHeaderText>
        </Row>
        <FormRowWrapper align="middle" justify="center">
          <FormWrapper
            name="mfaVerification"
            onFieldsChange={handleFormChange}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Please enter code',
                },
                {
                  min: otpNoOfDigitis || 6,
                  message:
                    'Code should be ' + (otpNoOfDigitis || 6) + ' digits',
                },
                {
                  max: otpNoOfDigitis || 6,
                  message:
                    'Code should be ' + (otpNoOfDigitis || 6) + ' digits',
                },
              ]}
            >
              <TextInput
                textType="number"
                type="block"
                placeholder={`Enter ${otpNoOfDigitis || 6} digit code`}
                label={'Code'}
              />
            </Form.Item>
            <SignInButtonWrapper>
              <PrimaryButton block htmlType="submit" disabled={disabledVerify}>
                Verify
              </PrimaryButton>
            </SignInButtonWrapper>
            <Row align="middle" justify="center">
              <MFACodeDescription>
                It may take a minute to receive your code.
              </MFACodeDescription>
            </Row>
            <Row align="middle" justify="center" wrap={false}>
              <MFACodeDescription>
                Haven't received it?
                {resendTimerInterval === 0 ? (
                  <ResendCodeButtom
                    type="link"
                    htmlType="button"
                    onClick={resendCode}
                  >
                    Resend a new code
                  </ResendCodeButtom>
                ) : (
                  <>
                    <MFACodeResend>Resend in</MFACodeResend>
                    <MFACodeResendTimer>
                      {moment()
                        .startOf('day')
                        .seconds(resendTimerInterval)
                        .format('mm:ss')}
                    </MFACodeResendTimer>
                  </>
                )}
              </MFACodeDescription>
            </Row>
          </FormWrapper>
        </FormRowWrapper>
      </EmailCard>
    </EmailContainer>
  );
};

export default MFAVerification;

import styled from 'styled-components';
import { Col, Form, Row } from 'antd';
import { devices } from '../../../utils';
import { SecondaryLinkButton } from '@users-platform/iceapple';

export const EmailContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  @media ${devices.laptop} {
    margin-top: 0px;
  }
  @media ${devices.laptopL} {
    margin-top: 0px;
  }
  @media ${devices.desktop} {
    margin-top: 0px;
  }
`;

export const EmailCard = styled.div`
  min-height: 641px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  @media ${devices.laptop} {
    min-width: 571px;
    max-width: 571px;
    padding: 30px;
    min-height: 0px;
  }
  @media ${devices.laptopL} {
    min-width: 571px;
    max-width: 571px;
    padding: 30px;
  }
  @media ${devices.desktop} {
    min-width: 571px;
    max-width: 571px;
    padding: 30px;
  }
`;

export const SignInHeaderText = styled(Col)`
  color: #393939;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
  margin-top: 15px;
`;

export const MFACodeHeaderText = styled(Col)`
  color: #393939;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.1px;
  margin-top: 10px;
`;

export const MFACodeValidationHeaderText = styled(Col)`
  color: #393939;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.1px;
`;

export const MFAEmailHeaderText = styled.span`
  color: #393939;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

export const FormRowWrapper = styled(Row)`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const FormWrapper = styled(Form)`
  width: 100%;
`;

export const SignInButtonWrapper = styled(Form.Item)`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const ForgetPasswordButtonWrapper = styled(Form.Item)`
  margin-top: 10px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
`;

export const PasswordFormWrapper = styled(Form.Item)`
  margin-bottom: 0px;
`;

export const SignInTermConditionsText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #686868;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 10px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  .ant-anchor-link {
    padding: 0px;
  }
`;
export const MFACodeDescription = styled(Col)`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
`;

export const MFACodeResend = styled.span`
  color: #969696;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-left: 5px;
`;

export const MFACodeResendTimer = styled.span`
  color: #dd2326;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-left: 5px;
`;

export const ResendCodeButtom = styled(SecondaryLinkButton)`
  color: #3da1fa;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  display: inline;
  margin-left: 5px;
`;

export const MFAVerifyIconRow = styled(Row)`
  margin-top: 10px;
`;

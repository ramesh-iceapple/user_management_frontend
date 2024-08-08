import { Col, Form, Row } from 'antd';
import styled from 'styled-components';
import { devices } from '../../../utils';

export const SignUpPasswordCard = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 66px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  @media ${devices.laptop} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding-left: 66px;
  }
  @media ${devices.laptopL} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding-left: 66px;
  }
  @media ${devices.desktop} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding-left: 66px;
  }
`;

export const SignUpPasswordHeaderText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  @media ${devices.laptop} {
    font-size: 30px;
  }
  @media ${devices.laptopL} {
    font-size: 30px;
  }
  @media ${devices.desktop} {
    font-size: 30px;
  }
`;

export const SignUpPasswordForHeaderText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
`;

export const SignUpPasswordForText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
  margin-left: 10px;
`;

export const SignUpPasswordForWrapper = styled(Row)`
  margin-top: 10px;
`;

export const SignUpPasswordHintText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
`;

export const FormRowWrapper = styled(Row)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  @media ${devices.laptop} {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media ${devices.laptopL} {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media ${devices.desktop} {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const FormWrapper = styled(Form)`
  width: 100%;
  max-width: 404px;
`;

export const ConfirmPasswordWrapper = styled(Form.Item)`
  margin-top: 20px;
`;

export const ConfirmPasswordRecaptchaWrapper = styled(Form.Item)`
  max-width: 200px;
  transform-origin: 0 0;
  transform: scale(0.86);
  @media ${devices.laptop} {
    transform: scale(1.33);
  }
  @media ${devices.laptopL} {
    transform: scale(1.33);
  }
  @media ${devices.desktop} {
    transform: scale(1.33);
  }
`;

export const NewPasswordHeader = styled(Row)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #393939;
  margin-bottom: 5px;
`;

export const NewPasswordWrapper = styled(Form.Item)`
   margin-bottom: 10px
`;

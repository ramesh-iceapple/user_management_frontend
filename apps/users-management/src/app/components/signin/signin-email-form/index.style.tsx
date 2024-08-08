import styled from 'styled-components';
import { Col, Form, Radio, Row } from 'antd';
import { devices } from '../../../utils';

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
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  @media ${devices.laptop} {
    min-width:  550px;
    max-width:  550px;
    padding: 30px;
    min-height: 0px;
  }
  @media ${devices.laptopL} {
    min-width:  550px;
    max-width:  550px;
    padding: 30px;
  }
  @media ${devices.desktop} {
    min-width:  550px;
    max-width:  550px;
    padding: 30px;
  }
`;

export const SignInHeaderText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin: 20px;
  margin-top: 40px;
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
    justify-content: end;
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

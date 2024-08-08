import styled from 'styled-components';
import { Col, Form, Row } from 'antd';
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
    min-width:  520px;
    max-width:  520px;
    padding: 30px;
    min-height: 0px;
  }
  @media ${devices.laptopL} {
    min-width:  520px;
    max-width:  520px;
    padding: 30px;
  }
  @media ${devices.desktop} {
    min-width:  520px;
    max-width:  520px;
    padding: 30px;
  }
`;

export const SignUpHeaderText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin: 20px;

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

export const SignUpTrailText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const SignUpTrailSubText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FormRowWrapper = styled(Row)`
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 35px;
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
`;

export const CreateButtonWrapper = styled(Form.Item)`
    margin-top: 35px;
    margin-bottom: 10px;
`;

export const SignUpTermConditionsext = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;  
  text-align: center;
  color: #686868;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  .ant-anchor-link {
    padding: 0px;
  }
`;

export const SignUpRecaptchaWrapper = styled(Form.Item)`
  transform-origin: 0 0;
  max-width: 200px;
  transform: scale(0.93);
  @media ${devices.laptop} {
    transform: scale(1.319);
  }
  @media ${devices.laptopL} {
    transform: scale(1.319);
  }
  @media ${devices.desktop} {
    transform: scale(1.319);
  }
`;

import { Col, Form, Row } from "antd";
import styled from "styled-components";
import { devices } from "../../../utils";

export const UpsertUserPasswordCard = styled.div`
  margin: 30px;
`;

export const UpsertUserPasswordHeaderText = styled(Col)`
  font-family: "Inter";
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

export const UpsertUserPasswordForHeaderText = styled(Col)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
`;

export const UpsertUserPasswordForText = styled(Col)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
  margin-left: 10px;
`;

export const UpsertUserPasswordForWrapper = styled(Row)`
  margin-top: 10px;
`;

export const UpsertUserPasswordHintText = styled(Col)`
  font-family: "Inter";
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #393939;
  margin-bottom: 5px;
`;

export const NewPasswordWrapper = styled(Form.Item)`
  margin-bottom: 10px;
`;

export const CreateButtonWrapper = styled(Form.Item)`
  margin-top: 35px;
  margin-bottom: 10px;
`;

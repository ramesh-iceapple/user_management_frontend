import { Col, Form, Row } from 'antd';
import styled from 'styled-components';
import { PrimaryButton } from '@users-platform/iceapple';
import { devices } from 'apps/users-management/src/app/utils';

export const UpsertUserUserInfoCard = styled.div`
  margin: 30px;
  // background: #ffffff;
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  // border-bottom-right-radius: 8px;
  // border-bottom-left-radius: 8px;
  // @media ${devices.laptop} {
  //   border-radius: 0px;
  //   border-bottom-right-radius: 8px;
  //   border-top-right-radius: 8px;
  //   padding-left: 66px;
  // }
  // @media ${devices.laptopL} {
  //   border-radius: 0px;
  //   border-bottom-right-radius: 8px;
  //   border-top-right-radius: 8px;
  //   padding-left: 66px;
  // }
  // @media ${devices.desktop} {
  //   border-radius: 0px;
  //   border-bottom-right-radius: 8px;
  //   border-top-right-radius: 8px;
  //   padding-left: 66px;
  // }
`;

export const UpsertUserUserInfoWrapper = styled(Row)`
  margin-top: 15px
`;

export const UpsertUserUserInfoHeaderText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
`;

export const UpsertUserUserInfoHintText = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #393939;
`;

export const FormRowWrapper = styled(Row)`
    margin-bottom: 5px;
`;

export const FormLeftColWrapper = styled(Col)`
    @media ${devices.laptop} {
      padding-right: 20px;
    }
    @media ${devices.laptopL} {
      padding-right: 20px;
    }
    @media ${devices.desktop} {
      padding-right: 20px;
    }
`;

export const FormRightColWrapper = styled(Col)`
    @media ${devices.laptop} {
      padding-left: 20px;
    }
    @media ${devices.laptopL} {
      padding-left: 20px;
    }
    @media ${devices.desktop} {
      padding-left: 20px;
    }
`;

export const FormWrapper = styled(Form)`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const UpsertUserUserInfoActionsWrapper = styled(Form.Item)`
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;
    }
`;

export const SubmitDemoButtonWrapper = styled(PrimaryButton)`
    max-width: 339px;
`;

export const SelectInputLabel = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px !important;
    line-height: 18px;
    color: #4D4D4D;
`;

export const SelectInputRequired = styled.span`
  color: #ff4d4f;
  margin-right: 2px;
`;



import styled from 'styled-components';
import { Col, Row } from 'antd';
import { devices } from '../../../utils';
import {
  PrimaryButton,
  PrimaryOutlinedButton,
} from '@users-platform/iceapple';

export const SignUpDetailsSuccessCard = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 66px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media ${devices.laptop} {
    padding-left: 66px;
  }
  @media ${devices.laptopL} {
    padding-left: 66px;
  }
  @media ${devices.desktop} {
    padding-left: 66px;
  }
`;

// export const SignUpDetailsSuccessIcon = styled.div`
//   width: 151px;
//   height: 151px;
//   background: #D9D9D9;
//   opacity: 0.3;
// `;

export const SignUpDetailsSuccessRowWrapper = styled(Row)``;

export const SignUpDetailsSuccessHeaderText = styled(Col)`
  color: #2d89da;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 20px;
`;

export const SignUpDetailsSuccessWrapper = styled(Row)`
  justify-content: center;
  text-align: center;
  @media ${devices.laptop} {
    justify-content: flex-start;
    text-align: left;
  }
  @media ${devices.laptopL} {
    justify-content: flex-start;
    text-align: left;
  }
  @media ${devices.desktop} {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const SignUpDetailsSuccessText = styled(Col)`
  color: #4d4d4d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.1px;
  margin-bottom: 20px;
  @media ${devices.laptop} {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${devices.laptopL} {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media ${devices.desktop} {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const SignUpButtonSuccessText = styled(Col)`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media ${devices.laptop} {
    margin-left: 40px;
  }
  @media ${devices.laptopL} {
    margin-left: 40px;
  }
  @media ${devices.desktop} {
    margin-left: 40px;
  }
`;

export const SignUpGoToDashBoardRowWrapper = styled(Row)`
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

export const SignUpGoToDashBoardButton = styled(PrimaryButton)`
  max-width: 216px;
`;

export const SignUpContactUsButton = styled(PrimaryOutlinedButton)`
  max-width: 138px;
`;

export const SignUpSuccessCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

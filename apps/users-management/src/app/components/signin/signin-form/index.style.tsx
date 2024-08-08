import styled from 'styled-components';
import { Col, Layout, Radio, Row } from 'antd';
import { devices } from '../../../utils';

const { Content } = Layout;

export const SignInContainer = styled(Content)`
  display: flex;
  align-items: center;
  margin: 20px;
  @media ${devices.laptop} {
    margin-right: 70px;
    margin-left: 70px;
  }
  @media ${devices.laptopL} {
    margin-right: 10%;
    margin-left: 10%;
  }
  @media ${devices.desktop} {
    margin: 10%;
  }
`;

export const SignInWrapper = styled(Row)`
  width: 100%
`;

export const AboutHeader = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 20px;
  text-align: center;
  @media ${devices.laptop} {
    font-size: 25px;
    line-height: 53px;
  }
  @media ${devices.laptopL} {
    font-size: 25px;
    line-height: 53px;
  }
  @media ${devices.desktop} {
    font-size: 25px;
    line-height: 53px;
  }
`;

export const AboutSubHeader = styled(Col)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #FFFFFF;
  margin: 20px;
  @media ${devices.laptop} {
    font-size: 30px;
    line-height: 36px;
  }
  @media ${devices.laptopL} {
    font-size: 30px;
    line-height: 36px;
  }
  @media ${devices.desktop} {
    font-size: 30px;
    line-height: 36px;
  }
`;

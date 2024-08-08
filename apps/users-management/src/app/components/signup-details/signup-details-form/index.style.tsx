import styled from 'styled-components';
import { Col, Layout, Row } from 'antd';
import { devices } from '../../../utils';

const { Content } = Layout;

export const SignUpDetailsContainer = styled(Content)`
  display: flex;
  align-items: center;
  margin: 20px;
  @media ${devices.laptop} {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  @media ${devices.laptopL} {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  @media ${devices.desktop} {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const SignUpDetailsWrapper = styled(Row)`
  width: 100%;
  height: 100%;
`;

export const SignUpDetailsColWrapper = styled(Col)`
  // height: auto;
  // @media ${devices.laptop} {
  //   height: 100%;
  // }
  // @media ${devices.laptopL} {
  //   height: 100%;
  // }
  // @media ${devices.desktop} {
  //   height: 100%;
  // }
`;

export const SignUpDetailsColFromWrapper = styled(Col)`
  //height: 100%;
`;

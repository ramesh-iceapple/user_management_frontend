import styled from "styled-components";
import { Col, Layout, Row } from "antd";
import { devices } from "../../../utils";

const { Content } = Layout;

export const UpsertUserContainer = styled(Content)`
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

export const UpsertUserWrapper = styled(Row)`
  width: 100%;
  height: 100%;
`;

export const UpsertUserColWrapper = styled(Col)`
  background: #1eb858;
`;

export const UpsertUserColFromWrapper = styled(Col)`
  box-shadow: 2px 2px 24px 2px rgba(0,0,0,0.1);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #ffffff;
  @media ${devices.laptop} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    // padding-left: 66px;
  }
  @media ${devices.laptopL} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    // padding-left: 66px;
  }
  @media ${devices.desktop} {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    // padding-left: 66px;
  }
`;

import { Row } from "antd";
import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  height: calc(100vh);
  position: relative;
`;

export const Dimmer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 21, 47, 1);
`;

export const SpinnerRow = styled(Row)`
  height: 100%;
  .ant-spin-lg .ant-spin-dot {
    font-size: 100px !important;
  }
  .ant-spin .ant-spin-dot-item {
    background-color: #1eb858 !important;
  }
  .ant-spin-lg .ant-spin-dot i {
    width: 20px !important;
    height:  20px !important;
  }
`;

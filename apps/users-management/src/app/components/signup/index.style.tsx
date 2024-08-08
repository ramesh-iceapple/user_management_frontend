import styled from "styled-components";
import { Col, Layout, Radio, Row, Space } from "antd";
import { devices } from "../../utils";
import { IMAGES } from "../../constants/common";

export const SignUpSpace = styled(Space)`
  width: 100%;
`;

export const SignUpLayout = styled(Layout)`
  height: 100%;
  background-image: url(${IMAGES.BG});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  @media ${devices.tablet} {
    min-height: 100vh;
  }
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


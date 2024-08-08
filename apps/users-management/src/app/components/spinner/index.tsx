import { Col, Row, Spin } from "antd";
import { Dimmer, SpinnerRow, SpinnerWrapper } from "./index.style";

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <Dimmer />
      <SpinnerRow align="middle" justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </SpinnerRow>
    </SpinnerWrapper>
  );
}

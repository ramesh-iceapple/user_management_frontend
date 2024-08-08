import { Col, Modal, Row, Switch } from "antd";
import styled from "styled-components";

export const PermissionText = styled.h5`
  text-transform: capitalize;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  color: #9c9c9c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const PermissionSwitch = styled(Switch)`
  .ant-switch-checked {
    background: #1eb858;
  }
`;

export const PermissionRow = styled(Row)<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

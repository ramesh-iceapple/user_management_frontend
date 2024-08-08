import { Modal } from "antd";
import styled from "styled-components";
import { devices } from "../../utils";

export const UpsertUserModal = styled(Modal)<{edit: boolean}>`
  .ant-modal-body {
    margin-top: 30px;
  }
  @media ${devices.laptop} {
    width: ${props => props.edit ? "40%" : "65%"} !important;
  }
  @media ${devices.laptopL} {
    width: ${props => props.edit ? "40%" : "65%"} !important;
  }
  @media ${devices.desktop} {
    width: ${props => props.edit ? "40%" : "65%"} !important;
  }
`;

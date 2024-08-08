import { Card, Modal, Row } from "antd";
import styled from "styled-components";
import { devices } from "../../utils";

export const PermissionsModal = styled(Modal)`
  .ant-modal-body {
    margin-top: 30px;
    max-height: calc(-350px + 100vh);
    overflow-y: auto;
  }
  .ant-modal-footer {
    border: 1px solid #f0f0f0;
    padding: 10px;
    border-radius: 4px;
  }
  .ant-modal-header {
    border-bottom: 2px solid #f5f5f5;
    padding-bottom: 20px;
  }
  @media ${devices.laptop} {
    width: 65% !important;
  }
  @media ${devices.laptopL} {
    width: 65% !important;
  }
  @media ${devices.desktop} {
    width: 65% !important;
  }

  .ant-switch-checked {
    background: #1eb858 !important;
  }
`;

export const PermissionActions = styled(Row)`
  margin: 0px !important;
  gap: 16px;
`;

export const AllPermissions = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: min-content;
  align-content: stretch;
  gap: 15px;
`;

export const PermisisonCard = styled(Card)`
  .ant-card-head-title {
    text-transform: capitalize;
  }
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
  row-gap: 10px;
`;

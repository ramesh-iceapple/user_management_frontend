import { Col, Row } from "antd";
import styled from "styled-components";
import { devices } from "../../utils";
import {
  PrimaryButton,
  PrimaryOutlinedButton,
} from "@users-platform/iceapple";

export const Container = styled.div`
  width: 100%;
  .ant-table-wrapper {
    overflow-x: auto;
    .ant-table table {
      background: #fff;
    }
    .ant-table-thead .ant-table-cell {
      background-color: #d9ecff;
      color: #144672;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 142.857% */
    }
    .ant-pagination-item-active {
      border-color: ${(props) => props.theme.primary.main};
      border-radius: 50%;
      background-color: ${(props) => props.theme.primary.main};
      a {
        color: white;
      }
    }
    button.ant-pagination-item-link {
      border-color: transparent;
    }
  }
  .slide-table-row-disabled {
    color: #c3c3c3;

    .ant-table-cell-row-hover {
      background-color: #fff !important;
      cursor: no-drop;
    }
  }
  .barcode-col {
    cursor: pointer !important;
  }
`;

export const MemberHeader = styled(Row)`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 180% */
`;

export const MemberActionButton = styled(PrimaryOutlinedButton)`
  min-width: 10px;
  min-height: 10px;
`;

export const AddNewUserCol = styled(Col)`
  margin-top: 10px;
  @media ${devices.desktop} {
    margin-top: 0px;
    display: flex;
    justify-content: end;
  }
  @media ${devices.tablet} {
    margin-top: 0px;
    display: flex;
    justify-content: end;
  }
  @media ${devices.laptop} {
    margin-top: 0px;
    display: flex;
    justify-content: end;
  }
  @media ${devices.laptopL} {
    margin-top: 0px;
    display: flex;
    justify-content: end;
  }
`;

export const MemberDataText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const AddNewUserButton = styled(PrimaryButton)`
  width: 100%;
  min-height: 40px;
  @media ${devices.desktop} {
    width: 216px;
  }
  @media ${devices.laptop} {
    width: 216px;
  }
  @media ${devices.laptopL} {
    width: 216px;
  }
  @media ${devices.tablet} {
    width: 216px;
  }
`;

export const HeaderRow = styled(Row)`
  margin-bottom: 40px;
`;

import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';
import { theme } from '../../theme';

export const PrimarySider = styled(Sider)`
  background: ${theme.primary.SD} !important;
  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0px;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0px;
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active,
  .ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-item-selected {
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.2) !important;
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    padding-left: 19px !important;
    padding: 5px;
    color: #949494 !important;
  }
  .ant-menu {
    background: transparent;
  }
  .ant-menu-item-group {
    margin-bottom: 10px;
  }
  .ant-menu-item {
    min-height: 30px;
    height: 100%;
    line-height: 30px;
    color: #949494 !important;
  }
  .ant-menu-inline {
    border: 0px;
  }
  .ant-menu-item-group-list {
    .ant-menu-item {
      margin-top: 13px;
    }
  }
  .ant-menu-item:first-child {
    margin-top: 13px !important;
  }
  .ant-menu-inline-collapsed {
    .ant-menu-title-content {
      display: none;
    }
    .ant-menu-item-group-title {
      text-align: center;
    }
    .ant-menu-item {
      margin-top: 0px;
      min-height: 35px;
      line-height: 35px;
      height: 100%;
      padding-inline: calc(50% - 11px - 4px) !important;
      padding-top: 5px !important;
      svg {
        width: 22px;
        height: 22px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
    .ant-menu-item:active,
    .ant-menu-submenu-title:active,
    .ant-menu-item-selected {
      border-radius: 7px;
      background: rgba(255, 255, 255, 0.2) !important;
      margin-left: 10px;
      margin-right: 10px;
      width: auto;
      padding-left: 14px !important;
      color: #949494 !important;
    }
  }
  .ant-menu-item-group-title {
    color: #fff;
    text-align: justify;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: bolder;
    line-height: 23px; /* 191.667% */
  }
  .ant-menu-item-divider {
    border-color: #ececec;
    opacity: 0.2;
  }
  .ant-menu-title-content {
    margin-left: 7px;
    color: #fff;
    text-align: justify;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

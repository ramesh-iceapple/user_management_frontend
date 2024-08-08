import { Badge, Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";
import {
  PrimaryDrawer,
  PrimaryOutlinedButton,
  PrimarySider,
} from "@users-platform/iceapple";
import {
  UsergroupAddOutlined,
  SettingOutlined,
  UserAddOutlined,
  ApartmentOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import { devices } from "../../utils";

export const Container = styled(Layout)`
  width: 100%;
  min-height: 100vh;
`;

export const LogoText = styled.span`
  color: #ececec;
  text-align: justify;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 164.286% */
  margin-left: 10px;
`;

export const LogoCol = styled(Col)<{ collapsed?: boolean }>`
  margin-left: 10px;
  ${(props) =>
    props?.collapsed && {
      marginLeft: `0px`,
    }};
`;

export const QLogoCol = styled(LogoCol)`
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const QLogoRow = styled(Row)<{ collapsed?: boolean }>`
  min-height: 63px;
  ${(props) =>
    props?.collapsed && {
      justifyContent: `center`,
    }};
`;

export const Divider = styled(Row)`
  height: 1px;
  opacity: 0.2;
  background: #ececec;
`;

export const SiteMenuText = styled.div`
  line-height: 20px; /* 164.286% */
`;

export const SiteMenuStateText = styled.div`
  color: #8d8d8d;
  text-align: justify;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; /* 255.556% */
`;

export const AddSiteButton = styled(PrimaryOutlinedButton)`
  min-width: 16px;
  min-height: 16px;
  height: 16px;
  width: 16px;
  padding: 0;
  margin: 0;
  background: transparent !important;
  border-radius: 4px;
  border: 1.5px solid #fff !important;
  color: #ffffff !important;
`;

export const ReferFriendIcon = styled(UsergroupAddOutlined)`
  color: #949494 !important;
`;

export const SettingsIcon = styled(SettingOutlined)`
  color: #949494 !important;
`;

export const InviteTeamIcon = styled(UserAddOutlined)`
  color: #949494 !important;
`;

export const DepartmentsIcon = styled(ApartmentOutlined)`
  color: #949494 !important;
`;

export const SitesIcon = styled(BlockOutlined)`
  color: #949494 !important;
`;

export const SiteBadge = styled(Badge)`
  display: none;
  margin-bottom: 15px !important;
  @media ${devices.desktop} {
    display: block;
  }
  @media ${devices.laptop} {
    display: block;
  }
  @media ${devices.laptopL} {
    display: block;
  }
  @media ${devices.tablet} {
    display: block;
  }
`;

export const UsersManagementSider = styled(PrimarySider)<{ userRole: string }>`
  display: none;
  @media ${devices.desktop} {
    display: block;
  }
  @media ${devices.laptop} {
    display: block;
  }
  @media ${devices.laptopL} {
    display: block;
  }
  @media ${devices.tablet} {
    display: block;
  }
`;

export const UsersManagementDrawer = styled(PrimaryDrawer)<{
  userRole: string;
}>`
  @media ${devices.desktop} {
    display: none;
  }
  @media ${devices.laptop} {
    display: none;
  }
  @media ${devices.laptopL} {
    display: none;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

export const ContentWrapper = styled(Content)`
  background: #f9f9f9;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
  @media ${devices.desktop} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${devices.laptop} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${devices.laptopL} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${devices.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const MultiTenantSider = styled(PrimarySider)`
  z-index: 2;
  display: none;
  @media ${devices.desktop} {
    display: block;
  }
  @media ${devices.laptop} {
    display: block;
  }
  @media ${devices.laptopL} {
    display: block;
  }
  @media ${devices.tablet} {
    display: block;
  }
`;

export const MultiTenantDrawer = styled(PrimaryDrawer)`
  z-index: 2;
  @media ${devices.desktop} {
    display: none;
  }
  @media ${devices.laptop} {
    display: none;
  }
  @media ${devices.laptopL} {
    display: none;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 24px 16px 0;
  @media ${devices.mobileS} {
    margin: 10px 24px 16px 0;
  }
  .ant-image-img {
    max-height: 40px;
  }
`;

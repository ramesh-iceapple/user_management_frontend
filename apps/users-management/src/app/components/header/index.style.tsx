import styled from "styled-components";
import { Col, Layout, Modal, Row } from "antd";
import { devices } from "../../utils";

const { Header } = Layout;

export const HeaderWrapper = styled(Header)`
  text-align: center;
  height: 64px;
  padding: 0px;
  line-height: 64px;
  background: #fafafa;
`;

export const LogoContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 24px 16px 0;
`;

export const LogoText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  text-align: justify;
  color: #3da1fa;
  margin-left: 10px;
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const TrailVersionText = styled.span`
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-right: 10px;
`;

export const Seperator = styled(Row)`
  background: #e4e4e4;
  opacity: 0.7;
  width: 100%;
  height: 1px;
`;

export const HeaderRowWrapper = styled(Row)`
  height: 100%;
  @media ${devices.desktop} {
    padding-inline: 20px;
    justify-content: end;
  }
  @media ${devices.laptop} {
    padding-inline: 20px;
    justify-content: end;
  }
  @media ${devices.laptopL} {
    padding-inline: 20px;
    justify-content: end;
  }
  @media ${devices.tablet} {
    padding-inline: 20px;
    justify-content: end;
  }
`;

export const MenuCol = styled(Col)`
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

export const UserCol = styled(Col)`
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const UserNameContainer = styled.div`
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
  padding: 0 8px;
  div {
    color: #4d4d4d;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }
`;

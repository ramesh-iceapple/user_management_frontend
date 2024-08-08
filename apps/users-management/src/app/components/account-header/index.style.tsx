import styled from 'styled-components';
import { Layout } from 'antd';
import { devices } from '../../utils';

const { Header } = Layout;

export const AccountHeaderWrapper = styled(Header)`
  text-align: center;
  color: #fff;
  height: 64px;
  padding-inline: 20px;
  line-height: 64px;
  background: transparent !important;
  @media ${devices.laptop} {
    padding-inline: 50px;
  }
  @media ${devices.laptopL} {
    padding-inline: 50px;
  }
  @media ${devices.desktop} {
    padding-inline: 50px;
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

export const LogoText = styled.span`
  font-family: 'Inter' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ECECEC;
  margin-left: 10px;
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ExistsAccountText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #FFFFFF;
  margin-right: 10px;
`;
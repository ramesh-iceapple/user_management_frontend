import styled from 'styled-components';
import { Layout, Space } from 'antd';
import { devices } from '../../utils';
import { IMAGES } from '../../constants/common';

export const SignUpDetailsSpace = styled(Space)`
  width: 100%;
`;

export const SignUpDetailsLayout = styled(Layout)`
  min-height: 100vh;
  background-image: url(${IMAGES.BG});
  background-repeat: no-repeat;
  background-size: cover;
   @media ${devices.laptop} {
    min-height: 100vh;
  }
  @media ${devices.laptopL} {
    height: 100vh;
  }
  @media ${devices.desktop} {
    height: 100vh;
  }
`;

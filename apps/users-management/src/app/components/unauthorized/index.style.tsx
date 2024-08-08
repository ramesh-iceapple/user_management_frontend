import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const { Text } = Typography;

export const UnauthorizedLayout = styled(Content)`
  margin-top: 110px;
  margin-left: 110px;
  margin-right: 110px;
  margin-bottom: 110px;
`;

export const UnauthorizedText = styled(Text)`
  text-align: center;
`;

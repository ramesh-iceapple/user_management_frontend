import { Row } from 'antd';
import { UnauthorizedLayout, UnauthorizedText } from './index.style';

const Unauthorized = () => {
  return (
    <UnauthorizedLayout>
      <Row justify="center">
        <h1>
          <UnauthorizedText type="danger">Access Denied</UnauthorizedText>
        </h1>
      </Row>
      <Row justify="center">
        <h2>
          <UnauthorizedText type="danger">
            Your account does not have the required permissions
          </UnauthorizedText>
        </h2>
      </Row>
    </UnauthorizedLayout>
  );
};

export default Unauthorized;

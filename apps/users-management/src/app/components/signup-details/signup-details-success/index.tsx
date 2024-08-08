import { Col, Row } from "antd";
import {
  SignUpDetailsSuccessCard,
  SignUpDetailsSuccessText,
  SignUpDetailsSuccessRowWrapper,
  SignUpDetailsSuccessHeaderText,
  SignUpSuccessCol,
  SignUpGoToDashBoardButton,
  SignUpGoToDashBoardRowWrapper,
  SignUpContactUsButton,
  SignUpButtonSuccessText,
  SignUpDetailsSuccessWrapper,
} from "./index.style";
import { PrimaryOutlinedButton } from "@users-platform/iceapple";

const SignUpDetailsSuccess = () => {
  // const navigate = useNavigate();

  return (
    <SignUpDetailsSuccessCard>
      <SignUpDetailsSuccessRowWrapper align="middle" justify="center">
        <Col xs={24} sm={24} lg={16} xl={16}>
          <SignUpDetailsSuccessWrapper>
            <SignUpDetailsSuccessHeaderText>
              Thank You! We're Reviewing Your Signup
            </SignUpDetailsSuccessHeaderText>
          </SignUpDetailsSuccessWrapper>
          <SignUpDetailsSuccessWrapper>
            <SignUpDetailsSuccessText>
              Thank you for completing the signup process. Your account is now
              pending for approval. We are currently reviewing your submission
              and will activate your account within the next few days.
            </SignUpDetailsSuccessText>
          </SignUpDetailsSuccessWrapper>
          <SignUpDetailsSuccessWrapper>
            <SignUpDetailsSuccessText>
              During this time, if you need to update any information or have
              any queries, please feel free to contact us. We're here to help!
            </SignUpDetailsSuccessText>
          </SignUpDetailsSuccessWrapper>
          <SignUpDetailsSuccessWrapper>
            <SignUpDetailsSuccessText>
              We appreciate your patience and are excited to have you on board
              soon.
            </SignUpDetailsSuccessText>
          </SignUpDetailsSuccessWrapper>
          <Row>
            <SignUpButtonSuccessText flex={"auto"}>
              <SignUpGoToDashBoardButton htmlType="button">
                Go to Homepage
              </SignUpGoToDashBoardButton>
            </SignUpButtonSuccessText>
            <Col flex={"auto"}>
              <SignUpContactUsButton htmlType="button">
                Contact Us
              </SignUpContactUsButton>
            </Col>
          </Row>
        </Col>
      </SignUpDetailsSuccessRowWrapper>
    </SignUpDetailsSuccessCard>
  );
};

export default SignUpDetailsSuccess;

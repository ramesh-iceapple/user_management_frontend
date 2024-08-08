import { Carousel, Col, Image, Row } from "antd";
import {
  AboutHeader,
  AboutSubHeader,
  SignInContainer,
  SignInWrapper,
} from "./index.style";
import SignInEmailForm from "../signin-email-form";
import { useMemo, useState } from "react";
import MFAVerification from "../mfa-verification";
import { ISignIn } from "../../../interfaces";
import { IMAGES } from "../../../constants/common";

export function SignInForm() {
  const [step, setStep] = useState(1);

  const [signInDetails, setSignInDetails] = useState<ISignIn>({
    email: "",
    password: "",
  });

  const getSignInDetails = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <SignInEmailForm
            setMFAVerification={(signInDetails: ISignIn) => {
              setSignInDetails(signInDetails);
              setStep(2);
            }}
          />
        );
      case 2:
        return (
          <MFAVerification
            signInDetails={signInDetails}
            setMFAEnabled={() => setStep(4)}
          />
        );
      default:
        return (
          <SignInEmailForm
            setIsInactiveUser={() => setStep(2)}
            setMFAVerification={() => setStep(3)}
          />
        );
    }
  }, [signInDetails, step]);

  return (
    <SignInContainer>
      <SignInWrapper align="middle">
        <Col xs={24} sm={24} lg={11} xl={11}>
          <Carousel effect="fade" autoplay dots={false} speed={300}>
            <Row align={"middle"} gutter={[0, 100]} justify={"center"}>
              <AboutHeader span={24}>AI Analysis for Users</AboutHeader>
              <Col>
                <Image
                  width={"100%"}
                  height={"100%"}
                  preview={false}
                  src={IMAGES.AIANALYSIS}
                />
              </Col>
            </Row>
            <Row align={"middle"} gutter={[0, 100]}>
              <AboutHeader span={24}>Easy Access for Users Platforms</AboutHeader>
              <Col>
                <Image
                  width={"100%"}
                  height={"100%"}
                  preview={false}
                  src={IMAGES.MOBILESUPPORT}
                />
              </Col>
            </Row>
            <Row align={"middle"} gutter={[0, 100]}>
              <AboutHeader span={24}>Improves Player Experience</AboutHeader>
              <Col>
                <Image
                  width={"100%"}
                  height={"100%"}
                  preview={false}
                  src={IMAGES.ACCESS}
                />
              </Col>
            </Row>
          </Carousel>
        </Col>
        <Col xs={24} sm={24} lg={13} xl={13}>
          {getSignInDetails}
        </Col>
      </SignInWrapper>
    </SignInContainer>
  );
}

export default SignInForm;

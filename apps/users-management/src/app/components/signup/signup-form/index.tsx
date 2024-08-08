import { Carousel, Col, Row, Image } from 'antd';
import {
  SignUpContainer,
  SignUpWrapper,
  AboutHeader,
  AboutSubHeader,
} from './index.style';
import { useState, useMemo } from 'react';
import SignUpEmailForm from '../signup-email-form';
import { useAppDispatch } from '../../../store';
import { IMAGES } from '../../../constants/common';

export function SignUpForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const [sentFailed, setSentFailed] = useState(false);

  const onEmailNext = async (email: string, recaptcha: string) => {
    setStep(step + 1);
  };

  const getSignUpDetails = useMemo(() => {
    switch (step) {
      case 1:
        return <SignUpEmailForm onNext={onEmailNext} failed={sentFailed} />;

      default:
        return <SignUpEmailForm onNext={onEmailNext} failed={sentFailed} />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, sentFailed]);

  return (
    <SignUpContainer>
      <SignUpWrapper align="middle">
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
              <AboutHeader span={24}>Easy Access for Users Apps</AboutHeader>
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
          {getSignUpDetails}
        </Col>
      </SignUpWrapper>
    </SignUpContainer>
  );
}

export default SignUpForm;

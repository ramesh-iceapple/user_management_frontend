import { Col, Grid, Image, Row } from "antd";
import {
  LogoContainer,
  AccountContainer,
  ExistsAccountText,
  AccountHeaderWrapper,
} from "./index.style";
import { useNavigate } from "react-router-dom";
import { AccountHeaderType } from "../../enums";
import { PrimaryButton } from "@users-platform/iceapple";
import { IMAGES } from "../../constants/common";
const { useBreakpoint } = Grid;

export interface IAccountProps {
  type: string;
  disable?: boolean;
}

const AccountHeader = ({ type, disable }: IAccountProps) => {
  const navigate = useNavigate();
  const screens = useBreakpoint();

  return (
    <AccountHeaderWrapper>
      <Row align="middle">
        <Col xs={12} sm={12} lg={12} xl={12}>
          <LogoContainer>
            <Image preview={false} src={IMAGES.LOGO} />
          </LogoContainer>
        </Col>
        {!disable && (
          <Col xs={12} sm={12} lg={12} xl={12}>
            <AccountContainer>
              {(screens.lg || screens.md) && (
                <ExistsAccountText>
                  {" "}
                  {type === AccountHeaderType.SIGNIN
                    ? "Already have an account?"
                    : "Joining with us?"}
                </ExistsAccountText>
              )}
              <PrimaryButton
                onClick={() =>
                  navigate(
                    type === AccountHeaderType.SIGNIN ? "/signin" : "/signup"
                  )
                }
              >
                {type === AccountHeaderType.SIGNIN ? "Sign In" : "Sign Up"}
              </PrimaryButton>
            </AccountContainer>
          </Col>
        )}
      </Row>
    </AccountHeaderWrapper>
  );
};

export default AccountHeader;

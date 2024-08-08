import { AccountHeaderType } from "../../enums";
import AccountHeader from "../account-header";
import { Dimmer, SignUpLayout, SignUpSpace } from "./index.style";
import SignUpForm from "./signup-form";

export function Signup() {
  return (
    <SignUpSpace direction="vertical" size={[0, 48]}>
      <SignUpLayout>
        <Dimmer />
        <AccountHeader type={AccountHeaderType.SIGNIN} />
        <SignUpForm />
      </SignUpLayout>
    </SignUpSpace>
  );
}

export default Signup;

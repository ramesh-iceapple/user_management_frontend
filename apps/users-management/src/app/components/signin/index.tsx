import { AccountHeaderType } from '../../enums';
import AccountHeader from '../account-header';
import { SignInSpace, SignInLayout, Dimmer } from './index.style';
import SignInForm from './signin-form';

export function Signin() {
  return (
    <SignInSpace direction="vertical" size={[0, 48]}>
      <SignInLayout>
        <Dimmer />
        <AccountHeader type={AccountHeaderType.SIGNUP} disable={true}/>
        <SignInForm />
      </SignInLayout>
    </SignInSpace >
  );
}

export default Signin;

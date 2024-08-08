import { AccountHeaderType } from '../../enums';
import AccountHeader from '../account-header';
import { Dimmer, SignInLayout, SignInSpace } from '../signin/index.style';
import SignUpDetailsForm from './signup-details-form';

export function SignUpDetails() {
  return (
    <SignInSpace direction="vertical" size={[0, 48]}>
      <SignInLayout>
        <Dimmer />
        <AccountHeader type={AccountHeaderType.SIGNIN}/>
        <SignUpDetailsForm />
      </SignInLayout>
    </SignInSpace >
  );
}

export default SignUpDetails;

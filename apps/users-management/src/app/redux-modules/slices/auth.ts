import { createSlice } from '@reduxjs/toolkit';
import { ActionPayload, ISignInResponse } from '../../interfaces';

interface IIntialState {
  signInResponse: ISignInResponse;
  resetPasswordResponse: ISignInResponse;
  passwordResetLoading: boolean;
  canRedirectToSignIn: boolean;
}

const initialState: IIntialState = {
  signInResponse: {
    MFAType: '',
    isOtpEnabled: false,
    isMFAVerified: false,
    otpResendWaitingInMins: 1,
    otpNoOfDigitis: 6,
    otpExpiryInMins: 1,
    authToken: '',
    refreshToken: '',
  },
  resetPasswordResponse: {
    MFAType: '',
    isOtpEnabled: false,
    isMFAVerified: false,
    otpResendWaitingInMins: 1,
    otpNoOfDigitis: 6,
    otpExpiryInMins: 1,
    authToken: '',
    refreshToken: '',
  },
  passwordResetLoading: false,
  canRedirectToSignIn: false,
};
const authSlice = createSlice({
  name: 'pg-auth-slice',
  initialState,
  reducers: {
    resetSignInResponse: (state) => {
      state.signInResponse = {
        MFAType: '',
        isOtpEnabled: false,
        isMFAVerified: false,
        otpResendWaitingInMins: 1,
        otpNoOfDigitis: 6,
        otpExpiryInMins: 1,
        authToken: '',
        refreshToken: '',
      };
    },
    setCanRedirectToSignIn: (state, { payload }: ActionPayload<boolean>) => {
      state.canRedirectToSignIn = payload;
    },
  },
});

export const { setCanRedirectToSignIn } = authSlice.actions;

export default authSlice.reducer;

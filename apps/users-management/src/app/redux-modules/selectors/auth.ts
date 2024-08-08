import { RootState } from '../../store';

export const getIsignInResponseSelector = (state: RootState) => state.auth.signInResponse;
export const getRestPasswordResponseSelector = (state: RootState) => state.auth.resetPasswordResponse;
export const getPasswordResetLoadingSelector = (state: RootState) => state.auth.passwordResetLoading;
export const getCanRedirectToSignIn = (state: RootState) => state.auth.canRedirectToSignIn;


import { createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINT from "../../constants/endpoint";
import {
  AppError,
  IOtpVerify,
  IResendOtp,
  ISignIn,
  ISignInResponse,
  ISignUp,
} from "../../interfaces";
import { RootState } from "../../store";
import { FetchUtils } from "@users-platform/iceapple";
import { LocalStorageUtil } from "../../utils/localstorage";
import { errorMapping } from "../../constants/common";

export const signUp = createAsyncThunk<
  string,
  ISignUp,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("signUp", async (signUpInfo, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.postRequest(
      `${ENDPOINT.AUTH.SIGNUP()}`,
      signUpInfo
    );
    if (status !== 201) throw new Error("common.failed.errorMessage");
    return data;
  } catch (err: any) {
    return rejectWithValue({
      message: err.message ? err.message : "signUp.errorMessage",
    });
  }
});

export const logIn = createAsyncThunk<
  ISignInResponse,
  ISignIn,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("logIn", async (signInInfo, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.postRequest<ISignInResponse>(
      `${ENDPOINT.AUTH.SIGNIN()}`,
      signInInfo
    );
    if (status !== 200) throw new Error("common.failed.errorMessage");
    LocalStorageUtil.saveTokensToLocalStorage(
      data.authToken,
      data.refreshToken
    );
    return data;
  } catch (err: any) {
    return rejectWithValue({
      statusCode: err.response.data.status,
      code: err.response.data.errorCode,
      message: err.response?.data?.errorCode &&
      errorMapping[err.response.data.errorCode]
        ? errorMapping[err.response.data.errorCode] : "login.errorMessage"
    });
  }
});


export const verifyOtp = createAsyncThunk<
  void,
  IOtpVerify,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("verifyOtp", async (otpVerify, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.postRequest(
      `${ENDPOINT.AUTH.VERIFY()}`,
      otpVerify
    );
    if (status !== 200) throw new Error("common.failed.errorMessage");
    return data;
  } catch (err: any) {
    return rejectWithValue({
      statusCode: err?.status,
      code: err?.code,
      message: err.message
        ? err.message
        : "verifyOTP.errorMessage",
    });
  }
});

export const resendOtp = createAsyncThunk<
  void,
  IResendOtp,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("resendOtp", async (resendOtp, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.postRequest(
      `${ENDPOINT.AUTH.RETRY()}`,
      resendOtp
    );
    if (status !== 200) throw new Error("common.failed.errorMessage");
    return data;
  } catch (err: any) {
    return rejectWithValue({
      statusCode: err?.status,
      code: err?.code,
      message: err.message
        ? err.message
        : "resendOTP.errorMessage",
    });
  }
});

export const logOut = createAsyncThunk<
  void,
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("logOut", async (_, { rejectWithValue }) => {
  try {
    const { data } = await FetchUtils.postRequest(
      `${ENDPOINT.AUTH.LOGOUT()}`,
      {}
    );
    return data;
  } catch (err: any) {
    return rejectWithValue({
      message: "logout.errorMessage",
    });
  }
});

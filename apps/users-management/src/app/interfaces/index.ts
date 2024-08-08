import { Gender, Status } from "../enums";

export interface ISignUpDetailsStepperStatus {
  statuses: Array<string>;
  percent?: number;
}

export interface ISignUpDetailsForm {
  onNext: any;
  failed?: boolean;
}

export interface IResetPasswordInfo {
  email: string;
  expired: boolean;
  open?: boolean;
}

export interface ISignUp {
  email: string;
  userType: string;
  recaptcha: string;
}

export interface ISignUpPassword {
  password: string;
  recaptcha: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IOtpVerify {
  email: string;
  password: string;
  otp: number;
}

export interface IResendOtp {
  email: string;
}

export interface IReferFriend {
  email: string;
  used: boolean;
  date: string;
}

export interface ISignInResponse {
  authToken: string;
  refreshToken: string;
  MFAType?: string;
  isOtpEnabled: boolean;
  isMFAVerified?: boolean;
  otpResendWaitingInMins?: number;
  otpNoOfDigitis?: number;
  otpExpiryInMins?: number;
}

export interface IForgotPassword {
  email: string;
  recaptcha: string;
}

export interface ISignUpRetryMail {
  email: string;
  recaptcha: string;
}

export interface IForgetPasswordVerify {
  token: string;
  password: string;
}

export interface IResetPassword {
  email?: string;
  token?: string;
}

export interface IResetPasswordVerify {
  token?: string;
  email?: string;
  oldPassword: string;
  newPassword: string;
  otp: number;
}


export type ActionPayload<T> = {
  payload: T;
};

export type AppError = {
  statusCode?: number;
  message: string;
  code?: string;
};

export interface ISignUpForm {
  designation?: string;
  otherDesignation?: string;
  onNext: any;
  onBack?: any;
  failed?: boolean;
}

export interface IForm {
  onNext: any;
  failed?: boolean;
  childRef?: any;
  goToFirstStep?: any;
}

export interface IStepperStatus {
  statuses: Array<string>;
  percent?: number;
}

export interface IUserInfo {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  language?: string;
  gender: Gender;
  mobile: string;
  roles?: Array<IRole>;
  sites?: Array<ISiteInfo>
  statusCode?: Status;
  id?: number;
  userName: string;
  departmentId?: number;
}

export interface IUserUpsertFormValues {
  countryCode: string;
  firstName: string;
  lastName: string;
  email: string;
  gender?: Gender;
  mobile: string;
  roles?: Array<IRole>;
  sites?: Array<ISiteInfo>
  password: string;
  userName: string;
  roleIds: Array<number>;
  siteIds: Array<number>;
  departmentId?: number;
  id?: number;
  isSitesChanged?: boolean;
  statusCode?: Status;
}

export const defalutUserUpsertRequest: IUserUpsertFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: undefined,
  mobile: "",
  statusCode: undefined,
  password: "",
  userName: "",
  roleIds: [],
  siteIds: [],
  departmentId: undefined,
  countryCode: "+91",
};

export interface IRole {
  id?: number;
  name: string;
  description: string;
}

export interface IPermission {
  permissionId: number;
  name: string;
  appId: number;
}

export interface IDepartment {
  id?: number;
  name: string;
  description: string;
}

export interface IResetPasswordInfo {
  email: string;
  expired: boolean;
  open?: boolean;
}

export const DefaultUserInfo: IUserInfo = {
  firstName: "",
  lastName: "",
  mobile: "",
  statusCode: Status.ACTIVE,
  gender: Gender.MALE,
  email: "",
  password: "",
  userName: "",
};

export interface ISignUp {
  email: string;
  userType: string;
  recaptcha: string;
}

export interface ISignUpPassword {
  password: string;
  recaptcha: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IOtpVerify {
  email: string;
  password: string;
  otp: number;
}

export interface IResendOtp {
  email: string;
}

export interface IReferFriend {
  email: string;
  used: boolean;
  date: string;
}

export interface IForgotPassword {
  email: string;
  recaptcha: string;
}

export interface ISignUpRetryMail {
  email: string;
  recaptcha: string;
}

export interface IForgetPasswordVerify {
  token: string;
  password: string;
}

export interface IResetPassword {
  email?: string;
  token?: string;
}

export interface IResetPasswordVerify {
  token?: string;
  email?: string;
  oldPassword: string;
  newPassword: string;
  otp: number;
}

export type PaginatedResult<T> = {
  totalCount: number;
  count: number;
  items: T[];
};
export interface ISignUpVerifyEmail {
  email: string;
}

export interface IVerifyToken {
  tokenType: TOKEN_TYPE;
  token: string;
}

export interface IVerifyTokenResponse {
  valid: boolean;
}

export enum TOKEN_TYPE {
  FORGOT_PASSWORD = "forgot-password",
  RESET_PASSWORD = "reset-password",
}

export interface IUserResult {
  data: IUser[];
}

export interface IUser {
  _id: string;
  userName: string;
  createdAt: string;
  personalInfo: IPersonalInfo;
}

export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
}

export interface IShareCase {
  userIds: string[];
  caseNo: string;
}

export interface IUserPasswordPolicies {
  policies: IPasswordPolicy[];
}

export interface IPasswordPolicy {
  name: string;
  value: string;
}

export interface ISiteInfo {
  id?: number;
  name: string;
  code: string;
  address: string;
}

export interface IUserApp {
  id: string;
  name: string;
  imagePath: string;
  url: string;
}
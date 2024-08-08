import { createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINT from "../../constants/endpoint";
import {
  AppError,
  IPermission,
  IUserApp,
  IUserInfo,
  IUserUpsertFormValues,
  PaginatedResult,
} from "../../interfaces";
import { RootState } from "../../store";
import { FetchUtils } from "@users-platform/iceapple";
import qs from "query-string";
import { errorMapping } from "../../constants/common";
import { LocalStorageUtil } from "../../utils/localstorage";

export const fetchUser = createAsyncThunk<
  IUserInfo,
  string,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchUser", async (authToken, { rejectWithValue }) => {
  try {
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    };
    const { data, status } = await FetchUtils.getRequest<IUserInfo>(
      ENDPOINT.USER.USER(),
      defaultHeaders
    );
    if (status !== 200) {
      LocalStorageUtil.clear();
      throw new Error("Failed");
    }
    LocalStorageUtil.saveUserToLocalStorage(data);
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "Error while getting user info",
    });
  }
});

export const fetchUsers = createAsyncThunk<
  PaginatedResult<IUserInfo>,
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchUsers", async (_, { rejectWithValue, getState }) => {
  try {
    const { currentPage, limit } = getState().user.usersInfo;
    const { searchText, statuses, roles } = getState().user.selectedFilters;
    let query: any = {
      PageNumber: currentPage,
      PageSize: limit,
    };
    if (searchText) {
      query = { ...query, ...{ Email: searchText } };
    }
    if (statuses) {
      query = { ...query, ...{ Status: statuses } };
    }
    if (roles) {
      query = { ...query, ...{ RoleId: roles } };
    }
    const queryParams = qs.stringify(query);
    const { data, status } = await FetchUtils.getRequest<
      PaginatedResult<IUserInfo>
    >(`${ENDPOINT.USER.USERSLIST()}?${queryParams}`);
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getUsers.errorMessage",
    });
  }
});

export const createUser = createAsyncThunk<
  void,
  IUserUpsertFormValues,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("createUser", async (userUpsertRequest, { rejectWithValue }) => {
  try {
    const { status } = await FetchUtils.postRequest(
      ENDPOINT.USER.USER(),
      userUpsertRequest
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.createUser.errorMessage",
    });
  }
});

export const updateUser = createAsyncThunk<
  void,
  IUserUpsertFormValues,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("updateUser", async (userUpsertRequest, { rejectWithValue }) => {
  try {
    await FetchUtils.putRequest(
      ENDPOINT.USER.UPDATEUSER(userUpsertRequest.id || 0),
      userUpsertRequest
    );
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.updateUser.errorMessage",
    });
  }
});

export const updatePassword = createAsyncThunk<
  void,
  any,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("updatePassword", async (userUpsertRequest, { rejectWithValue }) => {
  try {
    await FetchUtils.putRequest(
      ENDPOINT.USER.UPDATEPASSWORD(userUpsertRequest.id || 0),
      userUpsertRequest
    );
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.updateUser.errorMessage",
    });
  }
});

export const deleteUser = createAsyncThunk<
  void,
  number,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("deleteUser", async (userId, { rejectWithValue }) => {
  try {
    await FetchUtils.deleteRequest(ENDPOINT.USER.UPDATEUSER(userId));
  } catch (err) {
    return rejectWithValue({
      message: "um.deleteUser.errorMessage",
    });
  }
});

export const fetchUserPermissions = createAsyncThunk<
  IPermission[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchUserPermissions", async (_, { rejectWithValue, getState }) => {
  try {
    const { data } = await FetchUtils.getRequest<IPermission[]>(
      ENDPOINT.USER.USERPERMISSIONS()
    );
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getUsersPermissions.errorMessage",
    });
  }
});

export const fetchUserApps = createAsyncThunk<
  IUserApp[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchUserApps", async (_, { rejectWithValue }) => {
  try {
    const { data } = await FetchUtils.getRequest<IUserApp[]>(
      ENDPOINT.USER.USERAPPS()
    );
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "Error while getting user info",
    });
  }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINT from "../../constants/endpoint";
import {
  AppError,
  IPermission,
  IRole,
} from "../../interfaces";
import { RootState } from "../../store";
import { FetchUtils } from "@users-platform/iceapple";
import { errorMapping } from "../../constants/common";

export const fetchRoles = createAsyncThunk<
  IRole[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchRoles", async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.getRequest<IRole[]>(
      ENDPOINT.ROLES.ROLELIST()
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getRoles.errorMessage",
    });
  }
});

export const fetchRolesWithPermissions = createAsyncThunk<
  IRole[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchRolesWithPermissions", async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.getRequest<IRole[]>(
      ENDPOINT.ROLES.ROLELPERMISSIONIST()
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getRoles.errorMessage",
    });
  }
});

export const createRole = createAsyncThunk<
  number,
  IRole,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("createRole", async (role, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.postRequest(
      ENDPOINT.ROLES.ROLE(),
      role
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.createRole.errorMessage",
    });
  }
});

export const updateRole = createAsyncThunk<
  void,
  IRole,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("updateRole", async (role, { rejectWithValue }) => {
  try {
    await FetchUtils.putRequest(ENDPOINT.ROLES.UPDATEROLE(role.id || 0), role);
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.updateRole.errorMessage",
    });
  }
});

export const deleteRole = createAsyncThunk<
  void,
  number,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("deleteRole", async (roleId, { rejectWithValue }) => {
  try {
    await FetchUtils.deleteRequest(ENDPOINT.ROLES.UPDATEROLE(roleId));
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.deleteRole.errorMessage",
    });
  }
});

export const fetchRoleAllPermissions = createAsyncThunk<
  IPermission[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchRoleAllPermissions", async (_, { rejectWithValue }) => {
  try {
    const { data } = await FetchUtils.getRequest<IPermission[]>(
      ENDPOINT.ROLES.PERMISSIONS()
    );
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getRolePermissions.errorMessage",
    });
  }
});

export const fetchRolePermissions = createAsyncThunk<
  IPermission[],
  number,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchRolePermissions", async (roleId, { rejectWithValue }) => {
  try {
    const { data } = await FetchUtils.getRequest<IPermission[]>(
      ENDPOINT.ROLES.GETROLEPERMISSION(roleId)
    );
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getRolePermissions.errorMessage",
    });
  }
});

export const saveRolePermissions = createAsyncThunk<
  void,
  { roleId: number; permissionIds: Array<number> },
  {
    state: RootState;
    rejectValue: AppError;
  }
>("saveRolePermissions", async (permissionRequest, { rejectWithValue }) => {
  try {
    const { data } = await FetchUtils.postRequest(
      ENDPOINT.ROLES.UPDATEPERMISSION(),
      permissionRequest
    );
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.saveRolePermissions.errorMessage",
    });
  }
});

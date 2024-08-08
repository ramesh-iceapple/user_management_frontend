/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { AppError, IPermission, IRole } from "../../interfaces";
import {
  fetchRoleAllPermissions,
  fetchRolePermissions,
  fetchRoles,
  fetchRolesWithPermissions
} from "../thunks/role";

interface IIntialState {
  roles: IRole[];
  rolesLoading: boolean;
  error: AppError | null | undefined;
  permissionsLoading: boolean;
  rolePermissionsLoading: boolean;
  rolePermissions: IPermission[];
  permissions: Record<string, IPermission[]>;
  rolesWithPermissions: IRole[];
}

const initialState: IIntialState = {
  roles: [],
  error: null,
  rolesLoading: false,
  permissionsLoading: false,
  permissions: {},
  rolePermissionsLoading: false,
  rolePermissions: [],
  rolesWithPermissions: []
};

const roleSlice = createSlice({
  name: "um-role-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.rolesLoading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, { payload }) => {
        state.rolesLoading = false;
        state.roles = payload;
      })
      .addCase(fetchRoles.rejected, (state) => {
        state.rolesLoading = true;
      });
    builder
      .addCase(fetchRoleAllPermissions.pending, (state) => {
        state.permissionsLoading = true;
      })
      .addCase(fetchRoleAllPermissions.fulfilled, (state, { payload }) => {
        state.permissionsLoading = false;
        state.permissions = {};
        if (payload && payload.length > 0) {
          payload.forEach((x) => {
            const permission = x.name.split(":");
            if (permission.length == 2) {
              if (state.permissions[permission[0]])
                state.permissions[permission[0]].push(x);
              else state.permissions[permission[0]] = [x];
            }
          });
        }
      })
      .addCase(fetchRoleAllPermissions.rejected, (state) => {
        state.permissionsLoading = true;
      });
    builder
      .addCase(fetchRolePermissions.pending, (state) => {
        state.rolePermissionsLoading = true;
      })
      .addCase(fetchRolePermissions.fulfilled, (state, { payload }) => {
        state.rolePermissionsLoading = false;
        state.rolePermissions = payload;
      })
      .addCase(fetchRolePermissions.rejected, (state) => {
        state.rolePermissionsLoading = true;
      });
      builder
      .addCase(fetchRolesWithPermissions.pending, (state) => {
        state.rolesLoading = true;
      })
      .addCase(fetchRolesWithPermissions.fulfilled, (state, { payload }) => {
        state.rolesLoading = false;
        state.rolesWithPermissions = payload;
      })
      .addCase(fetchRolesWithPermissions.rejected, (state) => {
        state.rolesLoading = true;
      });
  },
});

export const {} = roleSlice.actions;

export default roleSlice.reducer;

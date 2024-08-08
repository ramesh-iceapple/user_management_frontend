import { RootState } from "../../store";

export const getRolesLoading = (state: RootState) => state.role.rolesLoading;

export const getRoles = (state: RootState) => state.role.roles;

export const getRolesPermissionsLoading = (state: RootState) =>
  state.role.permissionsLoading;

export const getRoleAllPermissions = (state: RootState) => state.role.permissions;

export const getRolePermissions = (state: RootState) => state.role.rolePermissions;

export const getRolesWithPermissions = (state: RootState) => state.role.rolesWithPermissions;

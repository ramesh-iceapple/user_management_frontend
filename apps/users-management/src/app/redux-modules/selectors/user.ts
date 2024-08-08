import { RootState } from "../../store";

export const getUserInfoSelector = (state: RootState) => state.user.userInfo;
export const getUserInfoLoading = (state: RootState) =>
  state.user.usersInfo.loading;
export const getUsersSelectedFiltersSelector = (state: RootState) =>
  state.user.selectedFilters;

export const getUsersInfoSelector = (state: RootState) => state.user.usersInfo;

export const getUsersSearchedText = (state: RootState) =>
  state.user.selectedFilters.searchText;

export const getUsersPermissions = (state: RootState) =>
  state.user.userPermissions;

export const getUserApps = (state: RootState) => state.user.userApps;

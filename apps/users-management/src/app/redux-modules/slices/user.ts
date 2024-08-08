/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayload, AppError, IUserApp, IUserInfo } from "../../interfaces";
import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_SORT_BY_COLUMN,
} from "../../constants/common";
import { PERMISSION_TYPE } from "../../enums";
import {
  fetchUserApps,
  fetchUserPermissions,
  fetchUsers,
} from "../thunks/user";

interface IIntialState {
  userInfo: IUserInfo | null;
  usersInfo: {
    loading: boolean;
    totalCount: number | null;
    count: number | null;
    data: IUserInfo[];
    currentPage: number;
    limit: number;
    orderBy: "asc" | "desc";
    sortBy: string;
  };
  selectedFilters: {
    searchText: string;
    statuses: string[];
    roles: string[];
  };
  userPermissions: PERMISSION_TYPE[];
  userApps: IUserApp[];
  error: AppError | null | undefined;
}

const initialState: IIntialState = {
  userInfo: null,
  selectedFilters: {
    searchText: "",
    statuses: [],
    roles: [],
  },
  usersInfo: {
    loading: false,
    totalCount: 10,
    count: 10,
    data: [],
    currentPage: 1,
    limit: DEFAULT_PAGE_LIMIT,
    sortBy: DEFAULT_SORT_BY_COLUMN,
    orderBy: "asc",
  },
  userPermissions: [],
  userApps: [],
  error: null,
};

type SelectedFilters = IIntialState["selectedFilters"];

const userSlice = createSlice({
  name: "um-user-slice",
  initialState,
  reducers: {
    setCurrentPage: (state, action: ActionPayload<number>) => {
      state.usersInfo.currentPage = action.payload;
    },
    resetUserInfo: (state) => {
      state.userInfo = null;
    },
    setSelectedFilters: (
      state,
      action: ActionPayload<Omit<SelectedFilters, "searchText" | "">>
    ) => {
      state.selectedFilters = {
        ...state.selectedFilters,
        ...action.payload,
      };
    },
    resetTableFilters: (state) => {
      state.selectedFilters = {
        ...state.selectedFilters,
        statuses: [],
        roles: [],
        searchText: "",
      };
    },
    setFilterSearchText: (state, action: ActionPayload<string>) => {
      state.selectedFilters.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersInfo.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.usersInfo.loading = false;
        state.usersInfo.totalCount = payload.totalCount;
        state.usersInfo.count = payload.count;
        state.usersInfo.data = payload.items;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.usersInfo.loading = false;
      });
    builder.addCase(fetchUserPermissions.fulfilled, (state, { payload }) => {
      state.userPermissions = payload.map((x) => x.name as PERMISSION_TYPE);
    });
    builder.addCase(fetchUserApps.fulfilled, (state, { payload }) => {
      state.userApps = payload;
    });
  },
});

export const {
  resetUserInfo,
  setSelectedFilters,
  resetTableFilters,
  setCurrentPage,
  setFilterSearchText,
} = userSlice.actions;

export default userSlice.reducer;

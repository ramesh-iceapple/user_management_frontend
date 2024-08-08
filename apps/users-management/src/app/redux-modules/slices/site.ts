/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {  AppError, ISiteInfo } from "../../interfaces";
import { fetchSites } from "../thunks/site";

interface IIntialState {
    sites: ISiteInfo[],
    sitesLoading: boolean;
    error: AppError | null | undefined;
}

const initialState: IIntialState = {
    sites: [],
    sitesLoading: false,
    error: null,
};

const siteSlice = createSlice({
  name: "um-site-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSites.pending, (state) => {
        state.sitesLoading = true;
      })
      .addCase(fetchSites.fulfilled, (state, {payload}) => {
        state.sitesLoading = false;
        state.sites = payload;
      })
      .addCase(fetchSites.rejected, (state) => {
        state.sitesLoading = true;
      });
  },
});

export const {
} = siteSlice.actions;

export default siteSlice.reducer;

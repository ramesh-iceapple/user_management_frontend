/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ActionPayload, AppError, IDepartment } from "../../interfaces";
import { fetchDepartments } from "../thunks/department";

interface IIntialState {
    departments: IDepartment[];
    departmentsLoading: boolean;
    error: AppError | null | undefined;
  }
  
  const initialState: IIntialState = {
    departments: [],
    error: null,
    departmentsLoading: false,
  };


const departmentSlice = createSlice({
  name: "um-department-slice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.departmentsLoading = true;
      })
      .addCase(fetchDepartments.fulfilled, (state, { payload }) => {
        state.departmentsLoading = false;
        state.departments = payload;
      })
      .addCase(fetchDepartments.rejected, (state) => {
        state.departmentsLoading = false;
      });
  },
});

export const {
} = departmentSlice.actions;

export default departmentSlice.reducer;

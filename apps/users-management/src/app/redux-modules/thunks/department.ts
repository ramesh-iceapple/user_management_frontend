import { createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINT from "../../constants/endpoint";
import { AppError, IDepartment } from "../../interfaces";
import { RootState } from "../../store";
import { FetchUtils } from "@users-platform/iceapple";
import { errorMapping } from "../../constants/common";

export const fetchDepartments = createAsyncThunk<
  IDepartment[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchDepartments", async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.getRequest<IDepartment[]>(
      ENDPOINT.DEPARTMENTS.DEPARTMENTSLIST()
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getDepartments.errorMessage",
    });
  }
});

export const createDepartment = createAsyncThunk<
  void,
  IDepartment,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("createDepartment", async (department, { rejectWithValue }) => {
  try {
    const { status } = await FetchUtils.postRequest(
      ENDPOINT.DEPARTMENTS.DEPARTMENT(),
      department
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
          : "um.createRole.errorMessage",
    });

  }
});

export const updateDepartment = createAsyncThunk<
  void,
  IDepartment,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("updateDepartment", async (department, { rejectWithValue }) => {
  try {
    await FetchUtils.putRequest(ENDPOINT.DEPARTMENTS.UPDATEDEPARTMENT(department.id || 0), department);
  } catch (err:any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.updateDepartment.errorMessage",
    });
  }
});


export const deleteDepartment = createAsyncThunk<
  void,
  number,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("deleteDepartment", async (departmentId, { rejectWithValue }) => {
  try {
    await FetchUtils.deleteRequest(ENDPOINT.DEPARTMENTS.UPDATEDEPARTMENT(departmentId));
  } catch (err: any) {
    return rejectWithValue({
      message:
        err.response?.data?.errorCode &&
        errorMapping[err.response.data.errorCode]
          ? errorMapping[err.response.data.errorCode]
          : "um.deleteDepartment.errorMessage",
    });

  }
});

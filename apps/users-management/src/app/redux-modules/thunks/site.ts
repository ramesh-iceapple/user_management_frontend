import { createAsyncThunk } from "@reduxjs/toolkit";
import ENDPOINT from "../../constants/endpoint";
import { AppError, ISiteInfo } from "../../interfaces";
import { RootState } from "../../store";
import { FetchUtils } from "@users-platform/iceapple";
import { errorMapping } from "../../constants/common";

export const fetchSites = createAsyncThunk<
  ISiteInfo[],
  void,
  {
    state: RootState;
    rejectValue: AppError;
  }
>("fetchSites", async (_, { rejectWithValue }) => {
  try {
    const { data, status } = await FetchUtils.getRequest<ISiteInfo[]>(
      ENDPOINT.SITES.SITESLIST()
    );
    if (status !== 200) {
      throw new Error("common.failed.errorMessage");
    }
    return data;
  } catch (err) {
    return rejectWithValue({
      message: "um.getSites.errorMessage",
    });
  }
});

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createGeneralMaster,
  getAllGeneralMasters,
  getGeneralMasterById,
  updateGeneralMaster,
  deleteGeneralMaster,
  getGeneralDtlsByGeneralMstId,
} from "@/services/general.service";

interface GeneralState {
  generalMasters: any[];
  generalDtls: any[];
  loading: boolean;
  error: string | null;
}

const initialState: GeneralState = {
  generalMasters: [],
  generalDtls: [],
  loading: false,
  error: null,
};

// Async thunks for GeneralMaster
export const fetchGeneralMasters = createAsyncThunk(
  "general/fetchGeneralMasters",
  async (_, { rejectWithValue }) => {
    try {
      return await getAllGeneralMasters();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchGeneralMasterById = createAsyncThunk(
  "general/fetchGeneralMasterById",
  async (id: string, { rejectWithValue }) => {
    try {
      return await getGeneralMasterById(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addGeneralMaster = createAsyncThunk(
  "general/addGeneralMaster",
  async (data: any, { rejectWithValue }) => {
    try {
      return await createGeneralMaster(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editGeneralMaster = createAsyncThunk(
  "general/editGeneralMaster",
  async ({ id, data }: { id: string; data: any }, { rejectWithValue }) => {
    try {
      return await updateGeneralMaster(id, data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeGeneralMaster = createAsyncThunk(
  "general/removeGeneralMaster",
  async (id: string, { rejectWithValue }) => {
    try {
      return await deleteGeneralMaster(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchGeneralDtlsByMasterId = createAsyncThunk(
  "general/fetchGeneralDtlsByMasterId",
  async (generalMstId: string, { rejectWithValue }) => {
    try {
      return await getGeneralDtlsByGeneralMstId(generalMstId);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeneralMasters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGeneralMasters.fulfilled, (state, action) => {
        state.loading = false;
        state.generalMasters = action.payload;
      })
      .addCase(fetchGeneralMasters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    // .addCase(fetchGeneralDtls.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    // })
    // .addCase(fetchGeneralDtls.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.generalDtls = action.payload;
    // })
    // .addCase(fetchGeneralDtls.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    // });
  },
});

export default generalSlice.reducer;

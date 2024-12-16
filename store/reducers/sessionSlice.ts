import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { loginAPI, registerAPI } from 'api/methods';
import { resetState } from 'store/reducers/commonActions';
import { UserData } from 'utils/appModels';

interface AsyncThunkConfig {
  rejectValue: any;
}

type AuthRequest = {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
  fcm_token?: string | null;
}

type AuthAPIResponse = {
  message: string;
  user: UserData;
  token: string;
};

export const loginRequest = createAsyncThunk<AuthAPIResponse, AuthRequest, AsyncThunkConfig>(
  'api/register',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginAPI(payload);
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const registerRequest = createAsyncThunk<AuthAPIResponse, AuthRequest, AsyncThunkConfig>(
  'api/registerRequest',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerAPI(payload);
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

interface SessionState {
  userData?: UserData | null;
}

const initialState: SessionState = {
  userData: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    sessionChangeState: (state, action: PayloadAction<Partial<SessionState>>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, () => initialState)
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.userData = action.payload.user
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.userData = action.payload.user
      })
  }
});

export type { SessionState, AuthAPIResponse }

export const { sessionChangeState } = sessionSlice.actions;

export default sessionSlice.reducer;

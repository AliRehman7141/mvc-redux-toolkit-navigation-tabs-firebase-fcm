import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { cancelOrderAPI, createOrderAPI, getOrderDataAPI, getOrdersPI, getStatsAPI } from 'api/methods';
import { resetState } from 'store/reducers/commonActions';
import { PACKAGE_SIZE, WEIGHT_METRIC } from 'utils/appEnums';
import { DeliveryOrder, Stats } from 'utils/appModels';

interface AsyncThunkConfig {
  rejectValue: any;
}

interface CreateOrderRequest {
  name: string,
  email: string,
  package_size: PACKAGE_SIZE | null,
  package_weight: number | null,
  weight_metric: WEIGHT_METRIC | null,
  number_of_items: number | null,
  delivery_time: string,
  pickup_time: string,
  pickup_city: string,
  pickup_address: string,
  delivery_city: string,
  delivery_address: string,
  phone_number: string | null,
  mobile_key: string | null,
}

export const getOrdersRequest = createAsyncThunk<DeliveryOrder[], undefined, AsyncThunkConfig>(
  'api/getOrdersRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrdersPI();
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getStatsRequest = createAsyncThunk<Stats, undefined, AsyncThunkConfig>(
  'api/getStatsRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getStatsAPI();
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getOrderDataRequest = createAsyncThunk<{ order: DeliveryOrder }, number, AsyncThunkConfig>(
  'api/getOrderDataRequest',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getOrderDataAPI(payload);
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const cancelOrderRequest = createAsyncThunk<Stats, number, AsyncThunkConfig>(
  'api/cancelOrderRequest',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await cancelOrderAPI(payload);
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createOrderRequest = createAsyncThunk<Stats, CreateOrderRequest, AsyncThunkConfig>(
  'api/createOrderRequest',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createOrderAPI(payload);
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

interface OrdersState {
  orders?: DeliveryOrder[];
  stats?: Stats | null;
  apiStatus?: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: OrdersState = {
  apiStatus: 'idle',
  orders: [],
  stats: null
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ordersChangeState: (state, action: PayloadAction<Partial<OrdersState>>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, () => initialState)
      .addCase(getOrdersRequest.pending, (state) => {
        state.apiStatus = "loading"
      })
      .addCase(getOrdersRequest.fulfilled, (state, action) => {
        state.orders = action.payload
        state.apiStatus = "succeeded"
      })
      .addCase(getOrdersRequest.rejected, (state, action) => {
        state.apiStatus = "failed"
      })
      .addCase(getStatsRequest.fulfilled, (state, action) => {
        state.stats = action.payload
      })
  }
});

export type { OrdersState }

export const { ordersChangeState } = ordersSlice.actions;

export default ordersSlice.reducer;

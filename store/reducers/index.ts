import { combineReducers } from '@reduxjs/toolkit';
import sessionSlice from './sessionSlice';
import ordersSlice from './ordersSlice';

export default combineReducers({
  session: sessionSlice,
  orders: ordersSlice,
});

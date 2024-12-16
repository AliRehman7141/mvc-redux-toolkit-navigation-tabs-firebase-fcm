import { configureStore } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

import rootReducer from './reducers/index';

type RootStateReducer = ReturnType<typeof rootReducer
>;
type PersistConfigType = PersistConfig<RootStateReducer>;


const persistConfig
  : PersistConfigType
  = {
  key: 'root',
  storage: AsyncStorage,
};


const persistedReducer = persistReducer<RootStateReducer>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export const clearReduxData = async (): Promise<{ status: string; error?: any }> => {
  try {
    await persistor.flush();
    await persistor.purge();
    await persistor.flush();
    return { status: 'Clean success' };
  } catch (error) {
    return { status: 'Error clearing data', error };
  }
};

// clearReduxData()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

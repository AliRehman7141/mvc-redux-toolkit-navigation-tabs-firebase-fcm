import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import FlashMessage from 'react-native-flash-message';

import MainStack from 'navigations/index';
import { persistor, store } from 'store/index';

LogBox.ignoreAllLogs(true);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
        <FlashMessage position="top" floating={true} />
      </PersistGate>
    </Provider>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConfigProvider } from 'antd';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { reducers } from './reducers';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import enUSIntl from 'antd/lib/locale/en_US';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
///uncomment to reset store data
//persistor.purge();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={enUSIntl}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

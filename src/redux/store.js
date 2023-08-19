import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

import { phonebookReducer } from './phonebookReducer';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

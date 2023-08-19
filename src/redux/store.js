import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { phonebookReducer } from './phonebookReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatReducer from '../reducers/chats';
import authReducer from '../reducers/auth';

export default function initStore() {
  const store = configureStore({
    reducer: combineReducers({
      chats: chatReducer,
      auth: authReducer,
    }),
  });
  return store;
}

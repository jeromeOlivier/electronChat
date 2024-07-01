import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatReducer from '../reducers/chats';

export default function initStore() {
  const store = configureStore({
    reducer: combineReducers({
      chats: chatReducer,
    }),
  });
  return store;
}

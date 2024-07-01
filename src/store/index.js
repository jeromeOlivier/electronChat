import { configureStore } from '@reduxjs/toolkit';

export default function initStore() {
  const store = configureStore({
    reducer: (state) => {
      return {
        message: 'Hello World',
        data1: 'just some test data',
        data2: 'just some test data 2',
      };
    },
  });
  return store;
}

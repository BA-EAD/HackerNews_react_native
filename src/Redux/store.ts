import {configureStore} from '@reduxjs/toolkit';
import NewsIdsSlice from './Reducers/Newsids';

export const store = configureStore({
  reducer: {
    news: NewsIdsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

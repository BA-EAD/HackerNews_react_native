import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = {
  newsids: Array<number>;
  loading: boolean;
}

const initialState: InitialStateType = {
  newsids: Array(),
  loading: false,
};

export const NewsIdsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsIds: (state, action: PayloadAction<Array<number>>) => {
      state.newsids = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});


export const {newsIds, setLoading} = NewsIdsSlice.actions;

export default NewsIdsSlice.reducer;

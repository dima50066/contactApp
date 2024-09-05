import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

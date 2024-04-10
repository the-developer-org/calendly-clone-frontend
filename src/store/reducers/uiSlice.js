import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
  name: 'eventSlice',
  initialState: { isLoading: false },
  reducers: {
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});
export default uiSlice.reducer;
export const { setLoading } = uiSlice.actions;

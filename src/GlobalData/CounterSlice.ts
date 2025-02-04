import { createSlice } from '@reduxjs/toolkit';




const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   increment(state){
    state.counterValue = state.counterValue + 1;
   },
   decrement(state){
    state.counterValue = state.counterValue -1;
   },
   reset(state){
    state.counterValue = 0;
   }
  },
});

export const {increment,decrement,reset } = counterSlice.actions;
export default counterSlice.reducer;

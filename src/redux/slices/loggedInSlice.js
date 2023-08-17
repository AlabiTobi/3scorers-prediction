import { createSlice } from "@reduxjs/toolkit"; 

const initialState = { 
  isLoggedIn: false,
  message: {},
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setDetails: (state, {payload}) => {
      state.isLoggedIn = true;
      state.message = payload;
    },
    clearDetails: (state) => {
      state.isLoggedIn = false;
      state.message = {};
    },
  },
});

export const { setDetails, clearDetails } = loggedInSlice.actions;

export default loggedInSlice.reducer;
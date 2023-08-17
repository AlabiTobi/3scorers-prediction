import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRoles: [],
  adminRoles: [],
  userRoles: [],
};

const fetchedRolesSlice = createSlice({
  name: "fetchedRoles",
  initialState,
  reducers: {
    setAllRoles: (state, {payload}) => {
      state.allRoles = payload;
    },
    setAdminRoles: (state, {payload}) => {
      state.adminRoles = payload;
    },
    setUserRoles: (state, {payload}) => {
      state.userRoles = payload;
    }
  },
});

export const { setAllRoles, setAdminRoles, setUserRoles } = fetchedRolesSlice.actions;

export default fetchedRolesSlice.reducer;
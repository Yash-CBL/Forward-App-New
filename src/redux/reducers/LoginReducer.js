import { createSlice } from "@reduxjs/toolkit";
const LoginReducer = createSlice({
  name: "AppStatus",
  initialState: {
    Status: false,
    userDetails: {},
    loginDetails:{}
  },
  reducers: {
    getLoginStatus: (state, action) => {
      state.Status = action.payload;
    },
    userData: async (state, action) => {
      state.userDetails = action.payload;
    },
    loginData: async (state, action) => {
      state.loginDetails = action.payload;
    },
    
  },
});

export const { getLoginStatus, userData , loginData} = LoginReducer.actions;
export default LoginReducer.reducer;

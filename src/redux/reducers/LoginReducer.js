import { createSlice } from "@reduxjs/toolkit";
const LoginReducer = createSlice({
  name: "AppStatus",
  initialState: {
    Status: false,
    loginDetails:{}
  },
  reducers: {
    getLoginStatus: (state, action) => {
      state.Status = action.payload;
    },
    loginData:(state, action) => {
      state.loginDetails = action.payload;
    },
    cleanLogindata:(state,mpayload) =>{
      state.loginDetails={}
    }
  },
});

export const { getLoginStatus, cleanLogindata , loginData} = LoginReducer.actions;
export default LoginReducer.reducer;

import { loginData, userData } from "../reducers/LoginReducer";
import { store } from "../store";
const { dispatch } = store;
export const senduserdata = (data) => {

  dispatch(userData(data));
};


export const savelogindata=(data)=>{
  dispatch(loginData(data))
  console.log(data);
}

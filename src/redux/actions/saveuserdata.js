import { cleanLogindata, loginData} from "../reducers/LoginReducer";
import { store } from "../store";
const { dispatch } = store;
export const savelogindata=(data)=>{
  dispatch(loginData(data))
  console.log(data,'saveddata');
}

export const cleanLoginData=()=>{
  dispatch(cleanLogindata())
}
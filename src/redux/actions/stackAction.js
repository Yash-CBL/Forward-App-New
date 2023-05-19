import { getLoginStatus } from "../reducers/LoginReducer";
import { store } from "../store";
const { dispatch } = store;
export const sendstatus = (data) => {
  dispatch(getLoginStatus(data));
};

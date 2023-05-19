import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const apiReq = (url, method, header, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: data,
      header: header,
    })
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

//common post api

export const apipost = (url, data, header) => {
  return apiReq(url, "POST", header, data);
};
//COMMON GET API

export const apiGet = (url, header) => {
  return apiReq(url, "GET", header);
};

//asyncStorage
//Get Data

export const GetAsyncData = async (key) => {
  let StringData = await AsyncStorage.getItem(key);
  let ObjData = JSON.parse(StringData);
  return ObjData;
};

//Set Data
export const SendAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("error occured ", e);
  }
};

//clear data
export const ClearAsyncData = async (key) => {
  await AsyncStorage.removeItem(key);
};

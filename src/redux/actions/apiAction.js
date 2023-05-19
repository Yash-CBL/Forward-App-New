import { apiGet, apipost } from "../../utils/utils";
export const GetApiData = (url,header) => {
  return new Promise((resolve, reject) => {
    apiGet(url,header)
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const LoginApi = (url, data, header) => {
  return new Promise((resolve, reject) => {
    apipost(url, data, header)
      .then((res) => {
        console.log("token: ", res.data.data.token);
        return resolve(res);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

import axios from "axios";
import { getToken } from "./auth";
import config from "./config";

const axiosConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  },
});

//check types
const validType = ["get", "post", "put", "delete"];
const withPayload = ["post", "put"];

// parameters for get request
export const getParams = (params = {}) => {
  if (typeof params !== "object") return "";
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

// api request
export const apiRequest = async (type = "get", url = "", payload = {}) => {
  if (!validType.includes(type)) return;
  try {
    const res = withPayload.includes(type)
      ? await axios[type](
          `${config?.api?.baseUrl}${url}`,
          payload,
          axiosConfig()
        )
      : await axios[type](
          `${config?.api?.baseUrl}${url}?${getParams(payload)}`,
          axiosConfig()
        );
    return res;
  } catch (err) {
    return new Error(err);
  }
};

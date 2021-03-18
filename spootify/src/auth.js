import axios from "axios";
import config from "./config";

/**
 * store token to storage
 * @param  {String} token token from spotify
 * @return Array
 */
export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token") || null;
export const hasToken = () => !!getToken();

/**
 * request token to spotify
 * @return Promise
 */
export const requestToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  return axios
    .post(config?.api?.authUrl, params, {
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_ENCODED_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(({ data }) => setToken(data?.access_token));
};

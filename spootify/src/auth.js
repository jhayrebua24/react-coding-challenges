import axios from "axios";
import config from "./config";

export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token") || null;
export const hasToken = () => !!getToken();

// request token to spotify APi
export const requestToken = () => {
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

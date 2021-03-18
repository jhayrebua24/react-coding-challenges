import { SET_VALUE } from "./constants";
import store from "./store";

/**
 * setting data to state
 * @param  {String} key To identify the data that needs to update
 * @param  {String} payload can be any value or function, if function it will pass the state value on param one
 * @return void
 */
export const setData = (key = "", payload = {}) => {
  if (typeof key !== "string") return;

  store.dispatch({
    type: SET_VALUE,
    data: {
      key,
      payload:
        typeof payload === "function" ? payload(store.getState()) : payload,
    },
  });
};

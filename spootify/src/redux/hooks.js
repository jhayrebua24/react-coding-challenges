import get from "lodash/get";
import { shallowEqual, useSelector } from "react-redux";

/**
 * get the data to state
 * @param  {String} key To identify the data that needs to update
 * @param  {String} defaultvalue default value if the data is not found on the state
 * @return void
 */
export const useApiData = (key = "", defaultValue = undefined) => {
  const data = useSelector(
    (state) => get(state, key, defaultValue),
    shallowEqual
  );
  return data;
};

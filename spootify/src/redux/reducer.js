import { SET_VALUE, defaultValue } from "./constants";

const reducer = (state = defaultValue, action = {}) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        [action?.data?.key]: action?.data?.payload,
      };
    default:
      return state;
  }
};

export default reducer;

import React from "react";
import { requestToken } from "../auth";
import Discover from "./Discover";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function Routes() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  React.useEffect(() => {
    requestToken().finally(() => setIsAppReady(true));
  }, []);

  if (!isAppReady) return null;

  return (
    <Provider store={store}>
      <Discover />
    </Provider>
  );
}

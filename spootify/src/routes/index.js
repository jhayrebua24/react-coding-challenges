import React from "react";
import { requestToken } from "../auth";
import Discover from "./Discover";

export default function Routes() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  React.useEffect(() => {
    requestToken().finally(() => setIsAppReady(true));
  }, []);

  if (!isAppReady) return null;

  // Here you'd return an array of routes
  return <Discover />;
}

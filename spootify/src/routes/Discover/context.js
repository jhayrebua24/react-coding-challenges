import { useContext, createContext } from "react";

export const DiscoverContext = createContext({
  //default context value
  discoverData: {
    newReleases: [],
    playlists: [],
    categories: [],
  },
  setData: () => {},
});

export const useDiscover = () => useContext(DiscoverContext);

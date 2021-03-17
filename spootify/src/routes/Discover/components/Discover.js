import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { DiscoverContext } from "../context";

export default function Discover() {
  const [discoverData, setData] = React.useState({
    newReleases: [],
    playlists: [],
    categories: [],
  });

  return (
    <DiscoverContext.Provider
      value={{
        discoverData,
        setData,
      }}
    >
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          dataKey="newReleases"
          id="released"
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          dataKey="playlists"
          id="featured"
        />
        <DiscoverBlock
          text="BROWSE"
          dataKey="categories"
          id="browse"
          imagesKey="icons"
        />
      </div>
    </DiscoverContext.Provider>
  );
}

import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

export default function Discover() {
  return (
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
  );
}

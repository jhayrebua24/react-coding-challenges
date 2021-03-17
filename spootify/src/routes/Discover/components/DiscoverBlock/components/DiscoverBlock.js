import React from "react";
import times from "lodash/times";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import "../styles/_discover-block.scss";
import { useDiscover } from "../../../context";
import { apiRequest } from "../../../../../api";
import { discoverConfig, transformData } from "../../../helper";

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative
      ? -scrollableContainer.offsetWidth
      : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

const PARAMS = {
  limit: 50,
};

function DiscoverBlock({ text, id, dataKey, imagesKey }) {
  const { discoverData, setData } = useDiscover(); // hooks for discover data
  const [isLoading, setIsLoading] = React.useState(true);
  //  get url & results key for the data key on this block
  const { url, resultsKey } = React.useMemo(
    () => discoverConfig[dataKey] || discoverConfig.default,
    [dataKey]
  );
  const data = Array.isArray(discoverData[dataKey])
    ? discoverData[dataKey]
    : [];

  React.useEffect(() => {
    // API request to get the data base on dataKey type
    apiRequest("get", url, PARAMS)
      .then((res) => {
        const lists = transformData(res, resultsKey);
        setData((prev) => ({
          ...prev,
          [dataKey]: lists,
        }));
      })
      .finally(() => setIsLoading(false));
  }, [dataKey, resultsKey, setData, url, setIsLoading]);

  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {isLoading
          ? times(7).map((v) => <DiscoverItem key={v} isLoading />) // show 7 empty blocks of items if loading
          : data.map((
              { [imagesKey]: images, name } // show items
            ) => <DiscoverItem key={name} images={images || []} name={name} />)}
      </div>
    </div>
  );
}
DiscoverBlock.defaultProps = {
  imagesKey: "images",
};
DiscoverBlock.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  imagesKey: PropTypes.string,
};
export default DiscoverBlock;

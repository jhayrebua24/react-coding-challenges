import React from "react";
import PropTypes from "prop-types";
import "../styles/_discover-item.scss";

function DiscoverItem({ images, name, isLoading }) {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{
          backgroundImage: !isLoading && `url(${images[0]?.url})`,
          backgroundColor: "#DEDEDE", // show gray if loading
        }}
      />
      <p className="discover-item__title">{isLoading ? "-" : name}</p>
    </div>
  );
}
DiscoverItem.defaultProps = {
  isLoading: false,
  images: "",
  name: "",
};
DiscoverItem.propTypes = {
  isLoading: PropTypes.bool,
  images: PropTypes.string,
  name: PropTypes.string,
};
export default DiscoverItem;

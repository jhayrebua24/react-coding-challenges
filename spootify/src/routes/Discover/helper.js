/**
 * transform data from spotify api to array of items
 * @param  {Object} Response destructure to get the data only from the response
 * @param  {String} resultsKey key for list of items e.g playlists
 * @return Array
 */
export const transformData = ({ data }, resultsKey = "") => {
  if (!data || typeof data !== "object") return [];
  const { [resultsKey]: list } = data;
  return Array.isArray(list?.items) ? list?.items : [];
};

export const discoverConfig = {
  newReleases: {
    url: "/browse/new-releases",
    resultsKey: "albums",
  },
  playlists: {
    url: "/browse/featured-playlists",
    resultsKey: "playlists",
  },
  categories: {
    url: "/browse/categories",
    resultsKey: "categories",
  },
  default: {
    url: "/",
    resultsKey: "",
  },
};
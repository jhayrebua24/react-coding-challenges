import { transformData } from "./routes/Discover/helper";
import { getParams } from "./api";

it("transform returns empty array", () => {
  const data = transformData({});
  expect(data).toEqual(expect.any(Array));
});

it("transform will return empty array even if the results key is  not valid & items is not array", () => {
  const testData = {
    data: {
      test: {
        items: {},
      },
    },
  };
  const data = transformData(testData, "foo bar");
  expect(data).toEqual(expect.any(Array));
});

it("returns empty string if the parameter is not object", () => {
  const params = getParams([]);
  expect(params).toMatch("");
});

it("returns string if the paramaters if correct", () => {
  const params = getParams({
    limit: 123,
  });
  expect(params).toMatch("limit=123");
});

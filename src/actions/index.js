export { default as uploadAction } from "./getData.js";
export { default as searchData } from "./searchData.js";
export { default as addMore } from "./addMore.js";
export { default as playerList } from "./playerList.js";
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const fetchDataFailure = data => ({
  type: FETCH_DATA_FAILURE,
  data
});
export const fetchDataBegin = data => ({
  type: FETCH_DATA_BEGIN,
  data
});

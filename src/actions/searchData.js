import { fetchDataFailure, fetchDataBegin } from "./index";
export const SEARCH_DATA_SUCCESS = "SEARCH_DATA_SUCCESS";

const fetchDataSuccess = (data, onePlayer) => ({
  type: SEARCH_DATA_SUCCESS,
  data,
  onePlayer
});

export default (data, onePlayer) => {
  return dispatch => {
    dispatch(fetchDataBegin(data));
    try {
      dispatch(fetchDataSuccess(data, onePlayer));
    } catch (e) {
      dispatch(fetchDataFailure(e));
    }
  };
};

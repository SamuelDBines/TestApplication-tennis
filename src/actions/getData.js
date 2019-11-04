import { fetchDataFailure, fetchDataBegin } from "./index";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data
});

export default data => {
  return dispatch => {
    dispatch(fetchDataBegin(data));
    try {
      dispatch(fetchDataSuccess(data));
    } catch (e) {
      dispatch(fetchDataFailure(e));
    }
  };
};

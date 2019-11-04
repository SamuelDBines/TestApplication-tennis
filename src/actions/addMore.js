import { fetchDataFailure } from "./index";
export const INCREASE_LIMIT_SUCCESS = "INCREASE_LIMIT_SUCCESS";

const fetchDataSuccess = data => ({
  type: INCREASE_LIMIT_SUCCESS,
  data
});

export default data => {
  return dispatch => {
    try {
      dispatch(fetchDataSuccess(data));
    } catch (e) {
      dispatch(fetchDataFailure(e));
    }
  };
};

import { fetchDataFailure, fetchDataBegin } from "./index";
export const PLAYER_DATA_SUCCESS = "PLAYER_DATA_SUCCESS";

const fetchDataSuccess = data => ({
  type: PLAYER_DATA_SUCCESS,
  data
});

export default data => {
  return dispatch => {
    console.log(data);
    dispatch(fetchDataBegin(data));
    try {
      dispatch(fetchDataSuccess(data));
    } catch (e) {
      dispatch(fetchDataFailure(e));
    }
  };
};

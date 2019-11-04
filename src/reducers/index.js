import { FETCH_DATA_BEGIN, FETCH_DATA_FAILURE } from "../actions/index";

import { FETCH_DATA_SUCCESS } from "../actions/getData";

import { PLAYER_DATA_SUCCESS } from "../actions/playerList";

import { SEARCH_DATA_SUCCESS } from "../actions/searchData";

import { INCREASE_LIMIT_SUCCESS } from "../actions/addMore";

const initialState = {
  status: null,
  data: undefined,
  fullData: undefined,
  search: undefined,
  playerList: undefined,
  onePlayer: false,
  limit: 10
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        status: FETCH_DATA_BEGIN
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        status: FETCH_DATA_SUCCESS,
        data: action.data,
        fullData: action.data
      };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        status: SEARCH_DATA_SUCCESS,
        data: action.data,
        onePlayer: action.onePlayer
      };
    case INCREASE_LIMIT_SUCCESS:
      return {
        ...state,
        status: INCREASE_LIMIT_SUCCESS,
        limit: action.data
      };
    case PLAYER_DATA_SUCCESS:
      return {
        ...state,
        status: PLAYER_DATA_SUCCESS,
        playerList: action.data
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        status: FETCH_DATA_SUCCESS,
        error: action.data
      };
    default:
      return state;
  }
};

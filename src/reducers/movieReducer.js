import * as types from "../actions/types";

const initialState = {
  data: [],
  loaded: false,
  total: 0,
  search: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,

        data: [...state.data, ...action.payload],
      };
    case types.TOTAL_MOVIES:
      return {
        ...state,

        total: action.payload,
      };
    case types.SEARCH_MOVIES:
      console.log(action.payload);
      return {
        ...state,

        search: action.payload,
      };
    default:
      return state;
  }
}

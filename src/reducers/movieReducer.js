import * as types from "../actions/types";

const initialState = {
  data: [],
  loaded: false,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

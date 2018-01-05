import { FETCH_ACTIONS } from "./actions";

// initial state
const initState = {
  data: {},
  isFetching: false,
  errorStatus: false,
  errorMessage: ''
};

export const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.IS_FETCHING:
      return { ...state, isFetching: true, error: false };
    case FETCH_ACTIONS.SUCCESS_FETCHING:
      return { ...state, data: action.payload, isFetching: false };
    case FETCH_ACTIONS.ERR_FETCHING:
      return { ...state, isFetching: false, errorStatus: true, errorMessage: action.payload };
    default:
      return state;
  }
};

import axios from "axios";

/***** ACTION TYPES *****/
export const FETCH_ACTIONS = {
  IS_FETCHING: "IS_FETCHING",
  SUCCESS_FETCHING: "SUCCESS_FETCHING",
  ERR_FETCHING: "ERR_FETCHING"
};

/***** ACTION CREATORS *****/
export const fetching = () => ({
  type: FETCH_ACTIONS.IS_FETCHING
});
export const errorFetching = err => ({
  type: FETCH_ACTIONS.ERR_FETCHING,
  payload: err
});
export const successFetching = data => ({
  type: FETCH_ACTIONS.SUCCESS_FETCHING,
  payload: data
});

/***** REDUX-THUNK *****/
/* using axios */
export const fetchData = url => {
  const request = {
    method: "GET",
    url: url
  };
  return dispatch => {
    axios(request)
      .then(res => {
        dispatch(successFetching(res.data));
      })
      .catch(err => {
        console.log("fetchData:: ", err);
      });
  };
};
import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk'
import { fetchReducer } from "./reducer";

// creating the main store passing it the top reducer and redux dev-tools extension function
const store = createStore(
  fetchReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
      thunkMiddleWare
  )
);

// logging the state, everytime the store changes
/* const unsubscribe = store.subscribe(() => {
  console.log("_____MAIN-STORE-CHANGE_________");
  console.log(store.getState());
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}); */

export { store };

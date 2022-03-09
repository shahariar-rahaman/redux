import { combineReducers } from "redux";
let value = "";
const inputValue = (state = value, action) => {
  console.log(action.type);
  if (action.type == "@@INIT") {
    console.log("ami kaj korci na");
    return state;
  } else if (action.type == "SUBMIT") {
    console.log("ami kaj korci");
    state = action.payload;
    return state;
  } else {
    return state;
  }
};
const rootReduce = combineReducers({
  reduce: inputValue,
});
export default rootReduce;

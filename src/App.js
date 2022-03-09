import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
function App() {
  let [input, newInput] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((items) => items.reduce);
  let handleSubmit = () => {
    dispatch({ type: "SUBMIT", payload: input });
  };
  let handleChange = (event) => {
    newInput(event.target.value);
  };
  console.log(data);
  return (
    <div className="App beside">
      <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="text-Area App"> <h1>{data}</h1> </div>
    </div>
  );
}
export default App;

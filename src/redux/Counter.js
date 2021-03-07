import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import { addText } from "./actions/inputText";
function Counter() {
  const counter = useSelector((state) => state.counter);
  const inputText = useSelector((state) => state.inputText);
  const [fName, setfName] = useState("");
  const [istrue, setIstrue] = useState(false);

  const dispatch = useDispatch();
  return (
    <div>
      <h1> Conunter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        placeholder="First Name"
        name="text"
        onChange={(e) => setfName(e.target.value)}
      />

      <h1> Text :{inputText}</h1>
      <button onClick={() => dispatch(addText(fName))}>+</button>
    </div>
  );
}

export default Counter;

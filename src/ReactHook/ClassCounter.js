import React, { useState } from "react";
import PropTypes from "prop-types";

const ClassCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}> Decrement </button>
      <button onClick={incrementFive}>five</button>
    </div>
  );
};

export default ClassCounter;

import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  function incrementOne() {
    setCounterOne(counterOne + 1);
  }
  function incrementTwo() {
    setCounterTwo(counterTwo + 1);
  }
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>increment One -{counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>increment Two -{counterTwo}</button>
      </div>
    </div>
  );
}
export default Counter;

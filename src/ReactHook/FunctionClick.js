import React from "react";

function FunctionClick() {
  function clickHandler() {
    return "hej";
  }

  return (
    <div>
      <button onClick={clickHandler}>button</button>
    </div>
  );
}
export default FunctionClick;

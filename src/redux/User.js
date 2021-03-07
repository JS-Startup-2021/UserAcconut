import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setpassword } from "./actions/actions/user";

function User() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>user:{user}</h1>
      <button onClick={() => dispatch(setpassword("hej"))}>+</button>
    </div>
  );
}

export default User;

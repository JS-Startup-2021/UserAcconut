import React, { useState, useEffect, useContext } from "react";
import { ChanelContext, UserContext } from "./App";

function ComponentE() {
  const context = useContext(UserContext);
  const chanel = useContext(ChanelContext);

  return (
    <div>
      {context} - {chanel}
    </div>
  );
}

export default ComponentE;

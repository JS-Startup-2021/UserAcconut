import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      hooker timer {timer}
      <button onClick={() => clearInterval(intervalRef.current)}> clear</button>
    </div>
  );
};
export default HookTimer;

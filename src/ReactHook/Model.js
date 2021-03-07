import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Model = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <div>
      {toggle(show)}
      {isShown && content(hide)}
    </div>
  );
};

const Appd = ({ text }) => {
  return (
    <div>
      <p>
        Click to reveal a secret:
        <Model
          toggle={(show) => <button onClick={show}>Open</button>}
          content={(hide) => (
            <div className="modal">
              There is no spoon.
              <br />
              <button onClick={hide}>Close</button>
            </div>
          )}
        />
      </p>
    </div>
  );
};

export default Appd;

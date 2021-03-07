import React, { useState } from "react";
import PropTypes from "prop-types";

const ClassCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({
            ...name,
            firstName: e.target.value,
            lastName: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={name.lastNamee}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h2> your first nsme is - {name.firstName} </h2>
      <h2> your last name is - {name.lastName} </h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default ClassCounterThree;

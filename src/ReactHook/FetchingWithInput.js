import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import axios from "axios";

const FetchingWithInput = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input
        typ="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <div>{post.title}</div>
    </div>
  );
};

export default FetchingWithInput;

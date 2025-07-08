import React from "react";

import './style.css'

const Names = (props) => {
  let names = props.names;
  // console.log(names)
  return (
    <div>
      <div>Names</div>

      {names.map((element, i) => {
        return <h1 key={i}>{element}</h1>;
      })}
    </div>
  );
};

export default Names;

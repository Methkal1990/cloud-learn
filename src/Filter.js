import React from "react";
import CheckBox from "./CheckBox";

const Filter = ({ handleFilter, sourcesList }) => {
    let cnt = 0;
  return (
    <div>
      {sourcesList.map(sr => (
        <CheckBox key={cnt += 1} fun={handleFilter} content={sr} />
      ))}
    </div>
  );
};

export default Filter;

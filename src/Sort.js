import React from "react";

const Sort = ({ sortby, sortid, handleSort }) => {
  const sortRes = () => {
    const e = document.getElementById(sortid);
    handleSort(e);
  };
  return (
    <div>
      <div>
        <select id={sortid} onChange={sortRes}>
          <option value="......">......</option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
        <label>By {sortby}</label>
      </div>
    </div>
  );
};

export default Sort;

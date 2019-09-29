import React from 'react'

const Sort= ({ sortby, sortid, handleSort}) => {
    const sortRes = () => {
        const e = document.getElementById(sortid);
        handleSort(e);
    }
    return (
        <div>
            <h3>By {sortby}</h3>
            <select id={sortid} onChange={sortRes}>
                <option value="......">......</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    )
}

export default Sort;

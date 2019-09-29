import React from 'react';
import ResCard from './ResCard';

const ResList = (props) => {
        return (
            <div>
                {props.res.map(r => 
                    <ResCard key={r.id} name={r.name}/>
                    )}
            </div>
        )
    
}

export default ResList;
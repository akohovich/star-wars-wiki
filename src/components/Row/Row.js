import React from 'react';

import './Row.css'

const Row = ({ left, right }) => {
    return (
        <div className="Row row">
            <div className="col">
                {left}
            </div>
            <div className="col">
                {right}
            </div>
        </div>
    );
}

export default Row;
import React from 'react';

import './DetailsInfo.css';

const DetailsInfo = () => {
    return(
        <div className="DetailsInfo">
            <h3>Person name</h3>
            <div className="d-flex info_block">
                <img src="https://cdni.rt.com/russian/images/2017.06/article/594e4840c46188182a8b473a.jpg" alt="person"/>
                <ul className="detail_info_block">
                    <li>
                        <span>mass</span>
                        <span>200</span>
                    </li>
                    <li>
                        <span>homeworld</span>
                        <span>Venera</span>
                    </li>
                    <li>
                        <span>gender</span>
                        <span>male</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DetailsInfo;
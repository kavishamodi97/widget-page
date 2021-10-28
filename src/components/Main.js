import React from 'react';
import './Main.css';

const Main = ({ searchPincode, setSearchPincode }) => {
    return (
        <div className="div-container">
            <input
                className="input-field"
                placeholder="Enter Pincode"
                value={searchPincode}
                onChange={(event) => setSearchPincode(event.target.value)}
            />
        </div>
    )
}

export default Main;
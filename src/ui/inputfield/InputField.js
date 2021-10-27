import React from "react";
import './inputfield.css';

const InputField = ({ value, name, placeholder, type, onChange }) => (
    <div id="inputcontainer">
        <input
            type={type}
            value={value}
            name={name}
            className="inputfield"
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);

export default InputField;
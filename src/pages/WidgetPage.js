import React, { useState } from "react";
import InputField from "../ui/inputfield/InputField";

const WidgetPage = () => {
    const [inputValue, setInputValue] = useState({ pincode: "" });
    const { pincode } = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    };

    return (
        <div>
            <InputField
                type="number"
                value={pincode}
                placeholder="Enter Pincode"
                name="pincode"
                onChange={handleChange}
            />
        </div>
    )
}

export default WidgetPage;
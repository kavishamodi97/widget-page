import React, { useState, useEffect } from "react";
import InputField from "../ui/inputfield/InputField";
import { fetchApiData } from '../api/Utils';
import Container from "./Container";
import Card from './Card';

const WidgetPage = () => {
    // const [inputValue, setInputValue] = useState({ pincode: "" });
    // const { pincode } = inputValue;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchApiData(setData);
    }, []);


    console.log(data);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputValue((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    //     console.log(inputValue);
    // };




    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            {/* <InputField
                type="number"
                value={pincode}
                placeholder="Enter Pincode"
                name="pincode"
                onChange={handleChange}
            /> */}
            {
                data.map((i) =>
                    i.children ?
                        <Container key={Math.random()} children={i.children} /> :
                        <Card key={Math.random()} child={i}
                        />)

            }
        </div>
    )
}

export default WidgetPage;
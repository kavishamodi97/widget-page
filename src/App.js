import React, { useState, useEffect } from 'react';
import { apiUrl } from './constants/ApiConstants';
import './App.css';
import axios from 'axios';
import Main from './components/Main';
import Container from './components/Container';
import Loading from './components/Loading';

function App() {

    const [fetchApiData, setFetchApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchPincode, setSearchPincode] = useState("560102");

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiUrl)
                setFetchApiData(() => response.data);
                console.log("api response", response.data);
            } catch (error) {
                console.log("something went wrong");
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <div className="App">
            <Main
                searchPincode={searchPincode}
                setSearchPincode={setSearchPincode}
            />
            <Container apiData={fetchApiData}
                pincode={searchPincode}
                width="100%"
            />
            {loading && <Loading />}
        </div>
    );
}

export default App;

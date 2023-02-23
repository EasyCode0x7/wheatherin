import React, { useState, useEffect } from "react";
import Cities from "../components/getCities";


const Weather = () => {

    const getWeather = async () => {
        try {
            const location = document.querySelector("#cityN");
            const value1 = location?.value || "";
            const API_KEY = '1171c304fba4185445395ed17ccab632';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${value1}&units=imperial&APPID=${API_KEY}`
            );

            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }

    const getData = () => {
        console.log("Madrid from getData");
    }

    return (
        <React.Fragment>
            <Cities newLocation={getWeather} />
        </React.Fragment>
    )
};

export default Weather;



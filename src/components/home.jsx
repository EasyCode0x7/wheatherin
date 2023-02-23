import React from "react";
import Weather from "../assets/getWeather";
import "../index.css";


const Home = () => {

    return (
        <div className="text-slate-300">

            <div>
                <div>
                    <Weather />
                </div>
            </div>
    
            <hr className="mt-12"/>

            <div className="rounded mt-2 data p-4 text-slate-50">
                <div className="header-h4 flex">
                    <div className="temp shrink-0 w-52 h-52">
                        <div className=" text-4xl">
                            53º
                            dd
                        </div>
                    </div>
                    <div className="data2 shrink-0 text-slate-50 w-96">
                        <h4>Madrid, ES</h4>
                        <hr />
                        <div>53º</div>
                        <div>Clear</div>
                        <div>Day 64º Night</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;



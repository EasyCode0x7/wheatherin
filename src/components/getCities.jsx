    import React from "react";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";


const Cities = ({newLocation}) => {

    const [state, setState] = useState('');

    const handleInputChange = (event) => {
        setState(
            event.target.value
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(state === '' || !state) return;
        newLocation(state);
    }

    return (
        <div className="input-group">

            <nav className="flex justify-between">
                <h3 className="text-3xl font-bold mb-10 text-left w-72 text-slate-50"><a href=''>WEATHER IN...</a></h3>
                <form className="mt-1" method="GET" onSubmit={handleSubmit}>
                    <input
                        id="cityN"
                        className="h-8 rounded p-3 text-slate-900 bg-neutral-200"
                        type="text" 
                        placeholder="city..." 
                        value={state} 
                        onChange={handleInputChange}/>
                </form>
            </nav>

            <h5 className='text-xl text-slate-400 font-bold my-2 mt-5 text-left mx-auto'>Weather in</h5>
            <p className="text-2xl font-bold text-left mt-2 text-slate-50" onChange={handleInputChange} id="cityValue">{state}</p>

        </div>
    );
}

export default Cities;



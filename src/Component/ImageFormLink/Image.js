import React from "react";
import './image.css'
const image = ({ oninputChange, onButtonSubmit }) => {
    return (
        <div className="">
            <p className="text-white text-2xl m-4 text-center p-4">
                {'this magic brain will detect the number of faces in you picture give it a try'}
            </p>
            <div className="flex justify-center p-5" >
                <div className=" form flex justify-center rounded-lg shadow-2xl p-9">
                    <input onChange={oninputChange} className="p-2 w-3/4 shadow appearance-none border rounded  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="text" />
                    <button onClick={onButtonSubmit} className=" w-1/4 bg-slate-900 text-white focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-base">Scan</button>
                </div>
            </div>
        </div>
    )
}

export default image;
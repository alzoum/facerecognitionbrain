import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain2.png'

const Logo = () => {
    return (
        <div className="ml-4 w-20">
            <Tilt className="tilt shadow-lg rounded h-36 w-36">
                <div>
                    <img className="p-6" src={brain} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
};



export default Logo
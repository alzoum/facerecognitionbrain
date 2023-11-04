import React from "react";
import './bounding-box.css'

const FaceRecognition = ({ imageUrl, box, onImageLoad }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <div className="parent-container">
                    <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" onLoad={() => onImageLoad()} />
                    <div className="bounding-box" style={{
                        top: box.topRow + 'px',
                        right: box.rightCol + 'px',
                        bottom: box.bottomRow + 'px',
                        left: box.leftCol + 'px'
                    }}></div>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition
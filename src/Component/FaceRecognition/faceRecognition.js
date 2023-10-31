import React from "react";
import './bounding-box.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center p-2">
            <div className="center p-2">
                <img id="inputimage" alt="" src={imageUrl} width={"700px"} height={"auto"} />
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition
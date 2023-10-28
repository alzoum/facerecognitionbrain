import React from "react";


const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center p-2">
            <div className="center p-2">
                <img alt="" src={imageUrl} width={"700px"} height={"auto"} />
            </div>
        </div>
    )
}

export default FaceRecognition
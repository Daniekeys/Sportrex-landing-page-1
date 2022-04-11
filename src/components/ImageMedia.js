import React from 'react';

const ImageMedia = ({ image,  className }) => {
    return (
        <div className="w-full h-auto">
        <img src={image} alt="" className="w-full h-full max-h-72"/>
        </div>
    );
    }

    export default ImageMedia;
import React from 'react';
import img from '../assets/profile_pic.webp'

const AboutImageCard = () => {
    return (
        <div className="h-full w-full md:w-1/2 flex justify-center items-center">
            <img
                src={img}
                alt=""
                className="h-72 w-72 md:h-96 md:w-96 aspect-square object-cover rounded-full border-blue-200 border-8"
            />
        </div>
    );
}

export default AboutImageCard;

import React from 'react';
import img from '../assets/profile_pic.png'

const AboutImageCard = () => {
    return (
        <div className='h-full w-1/2 flex justify-center items-center'>
            <img src={img} alt="" className='h-96 rounded-full border-blue-200 border-8' />
        </div>
    );
}

export default AboutImageCard;

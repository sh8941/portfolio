import React from 'react';
import img from '../assets/profile_pic.png'
import AboutTextCard from './AboutTextCard';
import AboutImageCard from './AboutImageCard';

const Introduction = () => {
    return (
        <div id='home' className='h-10/12 w-full bg-gray-200 flex text-black box-border px-12 py-28'>
            <AboutTextCard/>
            <AboutImageCard/>
        </div>
    );
}

export default Introduction;

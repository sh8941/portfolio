import React from 'react';
import img from '../assets/profile_pic.png'
import AboutTextCard from './AboutTextCard';
import AboutImageCard from './AboutImageCard';

const Introduction = () => {
    return (
        <div
            id="home"
            className="
                h-10/12
                w-full
                bg-gray-200
                flex
                flex-col-reverse
                md:flex-row
                text-black
                box-border
                md:px-12
                px-4
                py-28
                gap-5
                md:gap-0
            "
        >
            <AboutTextCard />
            <AboutImageCard />
        </div>
    );
};

export default Introduction;

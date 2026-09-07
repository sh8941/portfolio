import React from 'react';

const FooterCard = () => {
    return (
        <div className="flex p-4 md:p-8 gap-4 w-full md:w-auto justify-center">

            {/* icon */}
            <div className="text-4xl flex items-center">
                <i className="ri-puzzle-2-line"></i>
            </div>

            {/* text */}
            <div>
                <p className="text-lg">DSA</p>
                <h1 className="text-4xl font-bold">55+</h1>
                <p className="text-lg">Problems Solved</p>
            </div>

        </div>
    );
};

export default FooterCard;

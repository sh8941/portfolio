import React from 'react';

const FooterCard = ({logo, title, description, number}) => {
    return (
        <div className="flex p-4 md:p-8 gap-4 w-full md:w-auto justify-center">

            {/* icon */}
            <div className="text-4xl flex items-center">
                <i className={logo}></i>
            </div>

            {/* text */}
            <div>
                <p className="text-lg">{title}</p>
                <h1 className="text-4xl font-bold">{number}</h1>
                <p className="text-lg">{description}</p>
            </div>

        </div>
    );
};

export default FooterCard;

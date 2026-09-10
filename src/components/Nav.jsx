import React from 'react';

const Nav = () => {
    return (
        <nav className="
            fixed
            top-0
            left-0
            z-50
            w-full
            bg-mist-800
            text-white
            flex
            justify-between
            items-center
            px-4
            sm:px-6
            lg:px-12
            py-4
            lg:py-6
        ">
            {/* Logo */}
            <div className="font-bold font-heading text-xl sm:text-2xl">
                Samoon <span className="text-violet-700">Haider</span>
            </div>

            {/* Desktop Navigation */}
            <div className="
                hidden
                md:flex
                items-center
                gap-3
                lg:gap-5
                text-base
                lg:text-xl
                text-gray-200
                font-body
            ">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skill">Skills</a>
                <a href="#project">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Nav;
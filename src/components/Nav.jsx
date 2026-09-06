import React from 'react';

// const Nav = () => {
//     return (
//         <div className='bg-mist-800 fixed w-full text-2xl text-white flex justify-between items-center px-12 py-6'>
//             <div className='font-bold font-heading'>
//                 Shamoon <p className='inline text-violet-700'>Haider</p>
//             </div>
//             <div className='hidden md:flex gap-4 text-xl text-gray-200 md:px-8 font-body'>
//                 <a href="#home">Home</a>
//                 <a href="#about">About</a>
//                 <a href="#skill">Skills</a>
//                 <a href="#project">Projects</a>
//                 <a href="#experience">Experience</a>
//                 <a href="#contact">Contact</a>
//             </div>
//         </div>
//     );
// }

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
                Shamoon <span className="text-violet-700">Haider</span>
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

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl"
                aria-label="Open navigation menu"
            >
                ☰
            </button>
        </nav>
    );
};


export default Nav;

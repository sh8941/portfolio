import React from 'react';
import FooterCard from './FooterCard';

const Footer = () => {
    return (
        <div id='experience' className='w-full flex flex-col md:flex-row py-4 px-4 md:px-8 gap-4 bg-mist-900 text-white justify-around items-center md:divide-x md:divide-white/10'>
            <FooterCard/>
            <FooterCard/>
            <FooterCard/>
            <FooterCard/>
        </div>
    );
}

export default Footer;

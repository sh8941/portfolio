import React from 'react';
import FooterCard from './FooterCard';

const Footer = () => {
    return (
        <div id='experience' className='w-full flex flex-col md:flex-row py-4 px-4 md:px-8 gap-4 bg-mist-900 text-white justify-around items-center md:divide-x md:divide-white/10'>
            <FooterCard logo="ri-puzzle-2-fill" title="DSA" number="260+" description="Problems Solved on GFG" />
            <FooterCard logo="ri-code-box-fill" title="Build" number="2+" description="Projects has completed" />
            <FooterCard logo="ri-brain-3-fill" title="Experience" number="2+" description="years of learning experience" />
        </div>
    );
}

export default Footer;

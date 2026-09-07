import React from 'react';

const AboutCard = () => {
    return (
        <div className='w-full md:flex-1 rounded-xl px-4 py-6 h-fit
                       bg-gray-200 border border-gray-300 scroll-mt-48' id='about'>
            <div className='w-full h-1/5 text-3xl text-blue-600 '>
                <i className="ri-user-line"></i> <p className='inline text-black font-semibold'>About Me</p>
            </div>
            <p className='text-xl text-gray-800'>
                I am an MCA graduate and a backend-focused developer with experience in Java,
                Spring Boot, Spring Security, REST APIs, databases, and microservices.
                I enjoy building secure and scalable backend applications and continuously
                improving my skills in modern software development.
            </p>
            <br />
            <h4 className='text-xl'><i className="ri-school-line"></i> Master of Computer Application (MCA)</h4>
            <h4 className='text-xl'><i className="ri-map-pin-line"></i> India</h4>
            <h4 className='text-xl'><i className="ri-global-line"></i> Open to Work Worlwide</h4>
        </div>
    );
}

export default AboutCard;

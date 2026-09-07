import React from 'react';


const AboutTextCard = () => {
    return (
        <div className='h-full w-full md:w-1/2 font-body'>
            <h3 className='text-3xl font-semibold'>Hi, I'm</h3>
            <h1 className='text-6xl font-bold font-heading'>Samoon Haider</h1>
            <h3 className='text-4xl font-bold text-violet-700'>
                Java Full Stack Developer
            </h3>

            <br />

            <p className='text-gray-600'>
                Backend-focused Java Developer specializing in Spring Boot, REST APIs,
                and scalable backend systems. I build secure, reliable applications
                using modern backend technologies and clean architecture.
            </p>

            <div className="flex mx-2 my-4 gap-6">
                <button className='bg-violet-700 text-white rounded-xl px-2 py-1 cursor-pointer'>
                    Download Resume
                    <i className="ri-download-2-line"></i>
                </button>

                <button className='border-2 border-violet-700 rounded-xl px-2 py-1 cursor-pointer'>
                    Contact Me
                    <i className="ri-mail-line"></i>
                </button>
            </div>

            <div className='flex gap-6 m-2 p-2 scroll-mt-48' id='contact'>
                <a href="https://github.com/sh8941" target='_blank'>
                    <img
                        className='h-8 rounded-full'
                        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                        alt=""
                    />
                </a>

                <a href="https://www.linkedin.com/in/samoon-haider-320672267/" target='_blank'>
                    <img
                        className='h-8 rounded-full'
                        src="https://images.icon-icons.com/2429/PNG/512/linkedin_logo_icon_147268.png"
                        alt=""
                    />
                </a>

                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=zshamoonhaider@gmail.com' target='_blank'>
                    <img
                        className='h-8 rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EPM6s6gr00T9P2aRG9LJM1f_255aoXsbk6OiqFiPeg&s"
                        alt=""
                    />
                </a>

                <a href="https://leetcode.com/u/sh8941/" target='_blank'>
                    <img
                        className='h-8 rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwnSIRmiXvjitULcHVmuOo1tuGtmKpne5F5UlSkZjcShmUzKxFYdasOg&s=10"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}

export default AboutTextCard;

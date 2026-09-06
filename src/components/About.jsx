import React from 'react';
import ProjectCard from './ProjectCard';
import AboutCard from './AboutCard';
import SkillCard from './SkillCard';
import ProjectHeader from './ProjectHeader';
import ProjectCardContainer from './ProjectCardContainer';

const About = () => {
    return (
        <>
            <div className='flex flex-col box-border w-full p-2 m-0 items-center overflow-hidden'>
                <div className='flex justify-around p-8 w-full'>
                    <AboutCard/>
                    <SkillCard/>
                </div>

                <div className='flex p-8 w-full scroll-mt-48' id='project'>
                    <div className='w-full border h-96 rounded-xl bg-gray-100 border-gray-300'>
                        <ProjectHeader/>
                        <ProjectCardContainer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

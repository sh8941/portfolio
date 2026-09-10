import React from 'react';
import ProjectCard from './ProjectCard';
import AboutCard from './AboutCard';
import SkillCard from './SkillCard';
import ProjectHeader from './ProjectHeader';
import ProjectCardContainer from './ProjectCardContainer';

const About = () => {
    return (
        <>
            <div className="w-full p-2 m-0 overflow-hidden">

                {/* About + Skills */}
                <div className="flex flex-col md:flex-row justify-around gap-4 md:p-8 w-full">
                    <AboutCard />
                    <SkillCard />
                </div>

                {/* Projects */}
                <div className="w-full p-0 md:p-8 mt-6 md:mt-0 scroll-mt-48" id="project">
                    <div className="w-full border rounded-xl bg-gray-100 border-gray-300">

                        <ProjectHeader />

                        <ProjectCardContainer />

                    </div>
                </div>

            </div>
        </>
    );
}

export default About;

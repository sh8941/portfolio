import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardContainer = () => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-4 p-4 md:p-8'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

export default ProjectCardContainer;

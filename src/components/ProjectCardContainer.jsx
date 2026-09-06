import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardContainer = () => {
    return (
        <div className='w-full flex justify-start gap-4 p-8 items-center'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

export default ProjectCardContainer;

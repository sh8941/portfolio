import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardContainer = () => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-4 p-4 md:p-8'>
            <ProjectCard name="LinkFlow" description="A full-stack URL shortener with secure authentication,
                        link management, and click analytics built with Spring Boot and React."
                        repoUrl="https://github.com/sh8941/LinkFlow"
                        apiDocUrl="https://linkflow-1.onrender.com/swagger-ui/index.html#/"
                        tech={["Spring Boot", "Spring Security", "Spring JPA", "Postgres", "Docker"]}
                        logo="ri-links-line"/>
        </div>
    );
}

export default ProjectCardContainer;

import React from 'react';

const ProjectCard = ({ name, description, repoUrl, apiDocUrl, tech, logo }) => {
    return (
        <div className="w-full md:flex-1 border bg-gray-200 border-gray-300 rounded-2xl">

            <div className="flex min-h-32 items-center">
                <div className="rounded-full h-fit bg-gray-300 text-4xl m-4 p-4">
                    <i className={logo}></i>
                </div>

                <div className="flex flex-col pr-4">
                    <div className="font-bold">
                        {name}
                    </div>

                    <div className="text-xs">
                        {description}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center text-sm">
                {tech.map(item => <p className="bg-gray-300 m-2 p-2 rounded-2xl text-nowrap">
                    {item}
                </p>)}

            </div>

            <div className='w-full flex justify-between items-center'>
                <a href={apiDocUrl}>
                    <p className="text-indigo-700 text-lg p-4">
                        View API Documentation
                        <i className="ri-arrow-right-long-line"></i>
                    </p>
                </a>
                <a href={repoUrl} target='_blank'>
                    <p className="text-indigo-700 text-lg p-4">
                        View Github Repository
                        <i className="ri-arrow-right-long-line"></i>
                    </p>
                </a>
            </div>

        </div>
    );
};

export default ProjectCard;

import React from 'react';

const ProjectCard = () => {
    return (
        <div className="w-full md:flex-1 border bg-gray-200 border-gray-300 rounded-2xl">

            <div className="flex min-h-32 items-center">
                <div className="rounded-full h-fit bg-gray-300 text-4xl m-4 p-4">
                    <i className="ri-shield-user-line"></i>
                </div>

                <div className="flex flex-col pr-4">
                    <div className="font-bold">
                        Title
                    </div>

                    <div className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, pariatur?
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center text-sm">
                <p className="bg-gray-300 m-2 p-2 rounded-2xl text-nowrap">
                    Spring Boot
                </p>

                <p className="bg-gray-300 m-2 p-2 rounded-2xl text-nowrap">
                    Spring Security
                </p>

                <p className="bg-gray-300 m-2 p-2 rounded-2xl text-nowrap">
                    Postgres
                </p>
            </div>

            <p className="text-indigo-700 text-lg p-4">
                View All Projects
                <i className="ri-arrow-right-long-line"></i>
            </p>

        </div>
    );
};

export default ProjectCard;

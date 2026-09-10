import React from 'react';

const ProjectHeader = () => {
    return (
        <div className='flex justify-between box-border px-8 py-4'>
            <p><i className="ri-folder-line text-indigo-700"></i> Featured Projects</p>
            <a href="https://github.com/repos" target='_blank'><p className='text-indigo-700 inline'>View All Projects <i className="ri-arrow-right-long-line"></i></p></a>
        </div>
    );
}

export default ProjectHeader;

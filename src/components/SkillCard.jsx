import React from 'react';

const SkillCard = () => {
    return (
        <div className='w-full md:flex-1 h-fit rounded-xl p-4
                       bg-gray-200 border border-gray-300 scroll-mt-48' id='skill'>

            <div className='w-full h-1/5 text-3xl text-blue-600'>
                <i className="ri-code-s-slash-line"></i>
                <p className='inline text-black font-semibold'> Skills</p>
            </div>

            <div className='flex flex-wrap'>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Java</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Spring Boot</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Spring Data JPA</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Hibernate</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Spring Security</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>REST APIs</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>JWT</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>PostgreSQL</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>MySQL</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Redis</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Docker</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Microservices</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Spring Cloud</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Git & GitHub</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>GitHub Actions</p>
                <p className='text-lg px-4 py-2 bg-gray-300 inline rounded-2xl font-semibold text-gray-600 m-2'>Swagger / OpenAPI</p>
            </div>
        </div>
    );
}

export default SkillCard;

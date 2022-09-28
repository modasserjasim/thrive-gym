import React from 'react';

const SidebarExercise = () => {
    return (
        <div>
            <h3 className='text-xl font-semibold'>Exercise Details</h3>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between text-center'>
                <h2 className='text-xl font-bold'>Exercise time</h2>
                <p className='text-lg font-medium text-gray-400'>00 Seconds</p>
            </div>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between text-center'>
                <h2 className='text-xl font-bold'>Break time</h2>
                <p className='text-lg font-medium text-gray-400'>00 Seconds</p>
            </div>
        </div>
    );
};

export default SidebarExercise;
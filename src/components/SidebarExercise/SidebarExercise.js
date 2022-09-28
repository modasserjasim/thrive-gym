import React from 'react';

const SidebarExercise = ({ exerciseList }) => {
    let exerciseTime = 0;
    for (const exercise of exerciseList) {
        exerciseTime = exerciseTime + exercise.timeRequired;
    }
    return (
        <div>
            <h3 className='text-xl font-semibold'>Exercise Details</h3>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between text-center'>
                <h2 className='text-lg font-bold'>Exercise time</h2>
                <p className='text-lg font-medium text-gray-400'>{exerciseTime} Seconds</p>
            </div>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between text-center'>
                <h2 className='text-lg font-bold'>Break time</h2>
                <p className='text-lg font-medium text-gray-400'>00 Seconds</p>
            </div>
            <button className="w-full bg-primary text-white p-3 mt-10 disabled:bg-secondary text-2xl rounded-md font-semibold">Activity Completed</button>
        </div>
    );
};

export default SidebarExercise;
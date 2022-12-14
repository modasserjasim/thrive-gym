import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidebarExercise = ({ exerciseList, breakTime }) => {
    let exerciseTime = 0;
    for (const exercise of exerciseList) {
        exerciseTime = exerciseTime + exercise.timeRequired;
    }
    const activityCompleted = () => toast("Activity Successfully Completed");

    return (
        <div>
            <h3 className='text-xl font-semibold'>Exercise Details</h3>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between text-center flex-wrap'>
                <h2 className='text-lg font-bold'>Exercise time</h2>
                <p className='text-lg font-medium text-gray-400'>{exerciseTime} Seconds</p>
            </div>
            <div className='bg-base-100 p-5 my-5 px-5 rounded-lg flex justify-between flex-wrap text-center'>
                <h2 className='text-lg font-bold'>Break time</h2>
                <p className='text-lg font-medium text-gray-400'>{breakTime} Seconds</p>
            </div>
            <button onClick={activityCompleted} className="w-full bg-primary text-white p-3 mt-10 disabled:bg-secondary text-2xl rounded-md font-semibold hover:bg-green-700">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default SidebarExercise;
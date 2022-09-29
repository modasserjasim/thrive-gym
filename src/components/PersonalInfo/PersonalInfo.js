import React from 'react';

const PersonalInfo = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-16' src="https://modasserjasim.com/wp-content/uploads/2022/04/profile-pic-1.png" alt="Modasser" />
                <div>
                    <h3 className='text-xl font-bold'>Modasser Jasim</h3>
                    <p className='flex text-sm text-slate-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='bg-base-100 py-5 my-10 px-4 lg:px-8 rounded-lg flex justify-between flex-wrap text-center'>
                <div>
                    <h2 className='text-2xl font-bold'>79<span className='text-sm text-gray-500'>kg</span></h2>
                    <p className='text-lg font-medium text-gray-400'>Weight</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>5.11</h2>
                    <p className='text-lg font-medium text-gray-400'>Height</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>27<span className='text-sm text-gray-500'>yrs</span></h2>
                    <p className='text-lg font-medium text-gray-400'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
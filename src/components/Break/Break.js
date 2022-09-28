import React from 'react';

const Break = () => {
    return (
        <div>
            <h3 className='text-xl font-semibold'>Add A Break</h3>
            <div className='bg-base-100 p-5 my-10 px-8 rounded-lg flex justify-between text-center'>
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

export default Break;
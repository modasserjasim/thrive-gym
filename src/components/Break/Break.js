import React from 'react';

const Break = ({ breakTime }) => {
    // console.log(breakTime);
    return (
        <div>
            <button className='text-lg font-bold bg-base-300 p-3 rounded-full active:bg-primary'>
                {breakTime.break}s
            </button>
        </div>
    );
};

export default Break;
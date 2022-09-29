import React, { useState } from 'react';

const Break = ({ time, handleBreakTime }) => {
    // console.log(breakTime);

    return (
        <div>
            <button onClick={() => handleBreakTime(time)} className='text-lg font-bold bg-base-300 p-3 rounded-full active:bg-primary'>
                {time.break}s
            </button>
        </div>
    );
};

export default Break;
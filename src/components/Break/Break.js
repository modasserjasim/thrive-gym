import React, { useState } from 'react';

const Break = ({ time, handleBreakTime }) => {
    // console.log(breakTime);

    return (
        <div>
            <button onClick={() => handleBreakTime(time)} className='text-md bg-base-300 p-3 rounded-full hover:bg-primary active:bg-primary'>
                {time.break}s
            </button>
        </div>
    );
};

export default Break;
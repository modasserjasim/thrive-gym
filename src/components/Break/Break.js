import React from 'react';

const Break = ({ time, handleBreakTime }) => {

    return (
        <div>
            <button onClick={() => handleBreakTime(time)} className='text-lg font-semibold bg-base-300 p-3 rounded-full hover:bg-primary active:bg-primary'>
                {time.break}s
            </button>
        </div>
    );
};

export default Break;
import React from 'react';
import Break from '../Break/Break';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Sidebar = (props) => {
    const exercises = props.exercises;
    return (
        <div className='sticky top-10'>
            <PersonalInfo></PersonalInfo>

            <h3 className='text-xl font-semibold'>Add A Break</h3>
            <div className='bg-base-100 p-5 my-10 px-8 rounded-lg flex justify-between text-center'>
                {
                    exercises.map(breakTime => <Break breakTime={breakTime}></Break>)
                }
            </div>

        </div>
    );
};

export default Sidebar;
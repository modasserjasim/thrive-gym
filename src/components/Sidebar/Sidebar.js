import React from 'react';
import Break from '../Break/Break';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SidebarExercise from '../SidebarExercise/SidebarExercise';

const Sidebar = (props) => {
    const exercises = props.exercises;
    const exerciseList = props.exerciseList;
    return (
        <div className='sticky top-10'>
            <PersonalInfo></PersonalInfo>

            <h3 className='text-xl font-semibold'>Add A Break</h3>
            <div className='bg-base-100 p-5 mt-5 mb-10 px-5 rounded-lg flex justify-between text-center'>
                {
                    exercises.map(breakTime => <Break breakTime={breakTime} key={breakTime.id}></Break>)
                }
            </div>
            <SidebarExercise exerciseList={exerciseList}></SidebarExercise>

        </div>
    );
};

export default Sidebar;
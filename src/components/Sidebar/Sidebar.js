import React from 'react';
import Break from '../Break/Break';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SidebarExercise from '../SidebarExercise/SidebarExercise';

const Sidebar = ({ exercises, exerciseList, breakTime, handleBreakTime }) => {
    // console.log(exercises, exerciseList);
    const getBreakTimes = exercises.slice(0, 4);
    return (
        <div className='sticky top-10'>
            <PersonalInfo></PersonalInfo>

            <h3 className='text-xl font-semibold'>Add A Break</h3>
            <div className='bg-base-100 p-5 mt-5 mb-10 px-5 rounded-lg flex justify-between text-center flex-wrap'>
                {
                    getBreakTimes.map(time => <Break
                        time={time}
                        key={time.id}
                        handleBreakTime={handleBreakTime}

                    ></Break>)
                }
            </div>
            <SidebarExercise exerciseList={exerciseList} breakTime={breakTime}></SidebarExercise>

        </div>
    );
};

export default Sidebar;
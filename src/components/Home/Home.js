import logo from '../../thrive-gym-logo.png';
import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage, getLocalStorageData } from '../../utilities/localStorage';
import Blog from '../Blog/Blog';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseList, setExerciseList] = useState([]);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        fetch('exercise-list.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    useEffect(() => {
        const storedBreakTime = getLocalStorageData();
        setBreakTime(storedBreakTime);

    }, []);

    const handleAddToList = (exercise) => {
        const newExerciseList = [...exerciseList, exercise];
        setExerciseList(newExerciseList);
        toast(exercise.name + ' Added to the list!');
    }
    const handleBreakTime = (time) => {
        const newTime = time.break;
        setBreakTime(newTime);
        toast(time.break + 's Added as your break time!');
        addToLocalStorage(time);
    }
    return (
        <div>
            <div className="md:flex m-4 md:m-0">
                <div className="w-full md:w-8/12 lg:w-9/12 py-8 md:py-16 md:pl-14 lg:pl-28">
                    <div className='flex flex-col items-center sm:items-start'>
                        <img className='w-72' src={logo} alt="Thrive Gym Logo" />
                        <h3 className='text-3xl py-8'>Select today's exercise</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
                        {
                            exercises.map(exercise => <Exercise
                                exercise={exercise}
                                handleAddToList={handleAddToList}
                                key={exercise.id}>
                            </Exercise>)
                        }
                        <ToastContainer />
                    </div>
                </div>

                <div className="bg-base-300 md:w-4/12 rounded-lg md:rounded  lg:w-3/12 p-5 lg:p-10 md:ml-14 lg:ml-28">
                    <Sidebar
                        exercises={exercises}
                        exerciseList={exerciseList}
                        breakTime={breakTime}
                        handleBreakTime={handleBreakTime}
                    ></Sidebar>
                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Home;
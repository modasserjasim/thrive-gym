import logo from '../../thrive-gym-logo.png';
import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercise-list.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            <div className="md:flex">
                <div className="w-full md:w-9/12 py-20 pl-28">
                    <img className='w-72' src={logo} alt="Thrive Gym Logo" />
                    <h3 className='text-3xl py-8'>Select today's exercise</h3>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
                        {
                            exercises.map(exercise => <Exercise
                                exercise={exercise}
                                key={exercise.id}>
                            </Exercise>)
                        }
                    </div>
                </div>

                <div className="bg-base-300  md:w-3/12 p-10 mt-8 md:mt-0 ml-28">
                    <div className=''>
                        <h2>Welcome</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
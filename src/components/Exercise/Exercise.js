import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
    const { name, description, forAge, timeRequired, img } = exercise;
    return (
        <div className="bg-base-300 rounded-lg border-2 border-gray-600">
            <img className='rounded-t-lg' src={img} alt="Exercise name" />
            <div className="p-6">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='py-4'>{description.length > 80 ? description.slice(0, 100) + '...' : description}</p>
                <h4 className='text-lg font-semibold'>For Age: {forAge}</h4>
                <h4 className='text-lg font-semibold'>Time Required: {timeRequired}s</h4>
                <button onClick={() => handleAddToList(exercise)} className="w-full bg-primary text-white p-3 mt-3 disabled:bg-secondary text-2xl rounded-md font-semibold">Add to list</button>

            </div>
        </div>
    );
};

export default Exercise;
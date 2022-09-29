import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 md:px-20 lg:px-60 border-base-300 border-t pt-16 md:pt-32'>
            <h2 className='text-3xl md:text-5xl text-center mb-14'>3 React JS Questions and Answers</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-lg sm:text-2xl font-semibold">
                    How does react work?
                </div>
                <div className="collapse-content">
                    <p>React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable.</p>

                    <p className='py-4'>Let's have a look at an Instagram page built entirely with React to better understand how it works.</p>

                    <p>React splits the user interface into several components, as seen in the picture, making the code easier to debug. Each component has its attribute and function.</p>
                    <div className='flex justify-center py-5'>
                        <img src="https://modasserjasim.com/images/react-work.webp" alt="How react work" />
                    </div>


                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-lg sm:text-2xl font-semibold">
                    What are the differences between props and state?
                </div>
                <div className="collapse-content">
                    <div className='md:flex gap-10 '>
                        <div className=''>
                            <h3 className='text-xl border-b-2 p-2 mb-3 border-base-300'>Props</h3>
                            <p>1. The Data is passed from one component to another in Props.</p>
                            <p>2. Props is Immutable cannot be modified.</p>
                            <p>3. Props can be used with state and functional components.</p>
                            <p>4. Props are read-only.</p>
                        </div>
                        <div>
                            <h2 className='text-xl border-b-2 p-2 mb-3 border-base-300'>State</h2>
                            <p>1. The Data is passed within the component only in State.</p>
                            <p>2. State is Mutable  can be modified.</p>
                            <p>3. State can be used only with the state components/class component Before 16.0.</p>
                            <p>4. State is both read and write.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-lg sm:text-2xl font-semibold">
                    What does useEffect do beside API data loading?
                </div>
                <div className="collapse-content">
                    <p>By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed we'll refer to it as our “effect”, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                    <p className='font-bold pt-5'>What are effects, really? Examples are:</p>
                    <ul className='list-disc ml-7 pb-5'>
                        <li>Fetching data from API</li>
                        <li>Reading from local storage</li>
                        <li>Reading from database management</li>
                        <li>Registering and deregistering event listeners</li>
                        <li>Always use useEffect for asynchronous tasks</li>
                        <li>useEffect run after every render</li>
                    </ul>
                </div>
            </div>
            <p className='pt-12 md:pt-20 text-center pb-5 text-lg'>Copyright © 2022 Thrive Gym. Developed by Modasser </p>
        </div>
    );
};

export default Blog;
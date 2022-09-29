import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 md:px-20 lg:px-60 border-base-300 border-t py-16 md:py-32'>
            <h2 className='text-3xl md:text-5xl text-center mb-14'>3 React JS Questions and Answers</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-semibold">
                    How does react work?
                </div>
                <div className="collapse-content">
                    <p>React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility – it’s easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure. Coincidentally, it is also one of the best ways to learn React in general. Let’s do this today!

                        Working with a non-opinionated framework such as React gives you a lot of freedom, but also introduces more room for mistakes. Wait a second… What’s the deal with opinionated and non-opinionated frameworks?</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-semibold">
                    What are the differences between props and state?
                </div>
                <div className="collapse-content">
                    <p>1. The Data is passed from one component to another in Props.
                        1. The Data is passed within the component only in State.
                        2. Props is Immutable (cannot be modified).
                        2. State is Mutable ( can be modified).
                        3. Props can be used with state and functional components.
                        3. State can be used only with the state components/class component (Before 16.0).
                        4. Props are read-only.
                        4. State is both read and write.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-semibold">
                    What does useEffect do beside loading data?
                </div>
                <div className="collapse-content">
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

                        <p> Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution. </p>

                        <p> Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.</p>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
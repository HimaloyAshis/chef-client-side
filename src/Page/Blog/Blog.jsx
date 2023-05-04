import React from 'react';
import './Bolg.css'

const Blog = () => {
    return (
        
        <section className='px-10 mx-auto qustnBg'>
            <h2 className='text-3xl text-center py-8'>Question and Answer area</h2>

            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>What is the difference in uncontrolled and controlled components?</h2>
                <h4 className='text-xl'>In react , controlled components are refers to the components that have their own state and behavior that managed by the parent components. This components depends on prop passed down by parent component to update their state and uncontrolled components are refers to the components that managed their own state internally </h4>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>How to validate React props using PropTypes?</h2>
                <h4 className='text-xl'>propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</h4>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>What is the difference between nodejs and express js?</h2>
                <h4 className='text-xl'></h4>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
                <h4 className='text-xl'></h4>
            </div>
        </section>
    );
};

export default Blog;
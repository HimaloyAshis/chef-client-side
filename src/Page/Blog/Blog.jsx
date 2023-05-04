import React from 'react';
import './Bolg.css'

const Blog = () => {
    return (
        
        <section>
            <h2>Question and Answer area</h2>

            <div>
                <h2 className='text-2xl'>What is the difference in uncontrolled and controlled components?</h2>
                <h4 className='text-xl'></h4>
            </div>
            <div>
                <h2 className='text-2xl'>How to validate React props using PropTypes?</h2>
                <h4 className='text-xl'></h4>
            </div>
            <div>
                <h2 className='text-2xl'>What is the difference between nodejs and express js?</h2>
                <h4 className='text-xl'></h4>
            </div>
            <div>
                <h2 className='text-2xl'>What is a custom hook, and why will you create a custom hook?</h2>
                <h4 className='text-xl'></h4>
            </div>
        </section>
    );
};

export default Blog;
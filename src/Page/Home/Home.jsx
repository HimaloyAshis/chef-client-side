import React from 'react';
import './Home.css';
import { FaInstagram } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const chefs = useLoaderData()
    const { chefName, chefPicture, id, numberOfRecipes, yearsOfExperience } = chefs
    console.log(chefs)
    return (
        <section>
            {/* banner section */}
            <section className='bg'>
                <div className='flex justify-center items-center'>
                    <div className='text-white mx-5'>
                        <h2 className='text-5xl '>Toothsome Space is a most popular restaurant in shanghai. </h2>
                        <p>Have a good day with Toothsome</p>
                    </div>
                    <div className='w-4/5 h-96 rounded'>
                        {/* <img src={chef1} alt="" /> */}
                    </div>
                </div>
            </section>
            {/* chef card section */}
            <section className='mt-28'>
                <h1 className='text-center text-4xl text-sky-400 mb-10' >Here are the best Chefs in Toothsome in Shanghai.</h1>
                <div className='mt-3 grid sm:grid-cols-1 lg:grid-cols-3'>


                    {
                        chefs.map(chef =>
                            <div key={chef.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <img className="rounded-t-lg object-cover flex-grow" src={chef.chefPicture} alt="" />

                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {chef.chefName}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chef.yearsOfExperience}</p>
                                    <p>Recipes: {chef.numberOfRecipes}</p>

                                    <div className='flex justify-between items-center'>
                                        <button className='bton'><Link to={`/recipesDetail/${chef.id}`}>Learn More</Link></button>
                                        <button>like</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className='social'>

                <div className='w-44 h-52 mx-auto flex justify-center items-center'>
                    <button className="btn btn-outline btn-success"> <FaInstagram></FaInstagram > Follow us on Instagram</button>
                </div>
            </section>
            <section>
                <h1></h1>
            </section>
        </section>
    );
};

export default Home;
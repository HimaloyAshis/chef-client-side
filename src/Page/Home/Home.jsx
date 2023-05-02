import React from 'react';
import './Home.css';
import chef1 from '/image/chan-chi-fai chef-1.webp'
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const chefs = useLoaderData()
    const {chefName,chefPicture,id,numberOfRecipes,yearsOfExperience} =chefs
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
                        <img src={chef1} alt="" />
                    </div>
                </div>
            </section>
            {/* chef card section */}
            <section>
                {
                    chefs.map(chef =>
                        <div key={chef.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={chef.chefPicture} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button ><Link>Learn More</Link></button>
                            </div>
                        </div>
                    )
                }
            </section>
        </section>
    );
};

export default Home;
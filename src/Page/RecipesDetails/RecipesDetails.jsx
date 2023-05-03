import React from 'react';
import './RecipesDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    return (
        <section>
            <div className='chefBackground mb-10 mt-10'>
                <div className="max-w-sm  mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg object-cover flex-grow" src={chefDetails.chefPicture} alt="" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {chefDetails.chefName}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chefDetails.yearsOfExperience}</p>
                        <p>Recipes: {chefDetails.numberOfRecipes}</p>

                        <div className='flex justify-between items-center'>

                            <button>like</button>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                
            </section>
        </section>
    );
};

export default RecipesDetails;
import React from 'react';
import './RecipesDetails.css'
import { useLoaderData } from 'react-router-dom';
import {FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useState } from 'react';
import ThreeRecipes from '../ThreeRecipe/ThreeRecipes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesDetails = () => {
   
    const [like, setLike] = useState(false)

    const chefDetails = useLoaderData()
    const { recipes } = chefDetails
    console.log(chefDetails)

    const likeButton = ()=>{
        setLike(true)
        toast('Thank you for choosing me')

    }


    return (
        <section className=''>

            {/* chef details */}
            
            <div className='chefBackground py-10 '>
                <ToastContainer></ToastContainer>
                <div className="max-w-sm  mx-auto chefs text-black border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg object-cover flex items-center flex-grow" src={chefDetails.chefPicture} alt="" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {chefDetails.chefName}
                        </h5>
                        <p><span className='text-2xl'>Chef Description</span>: {chefDetails.chefDescription}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chefDetails.yearsOfExperience}</p>
                        <p className='text-black'>Recipes: {chefDetails.numberOfRecipes}</p>

                        <div className='flex justify-between items-center'>
                            <button onClick={likeButton}>{like ? <FaThumbsUp className='h-8 w-8'></FaThumbsUp> : <FaRegThumbsUp className='h-8 w-8'></FaRegThumbsUp>}</button>

                        </div>
                    </div>
                </div>
            </div>
            <section className='chefBackground'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
                    {
                        recipes.map(recipe => <ThreeRecipes recipe={recipe} key={recipe.name}></ThreeRecipes>  )
                    }
                </div>

            </section>
        </section>
    );
};

export default RecipesDetails;
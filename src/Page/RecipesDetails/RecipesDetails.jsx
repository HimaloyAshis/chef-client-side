import React from 'react';
import './RecipesDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useState } from 'react';

const RecipesDetails = () => {
    const [favour, setFavour] = useState(false)
    const [like, setLike] = useState(false)

    const chefDetails = useLoaderData()
    const { recipes } = chefDetails
    console.log(chefDetails)

    const likeButton = ()=>{
        setLike(true)
    }

    const favorite = (id) => {
        const fav = recipes.recipe.find(rce=>recipes.id === id)
        setFavour(true)
    }

    return (
        <section>
            <div className='chefBackground py-10'>
                <div className="max-w-sm  mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg object-cover flex-grow" src={chefDetails.chefPicture} alt="" />

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {chefDetails.chefName}
                        </h5>
                        <p><span className='text-2xl'>Chef Description</span>: {chefDetails.chefDescription}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chefDetails.yearsOfExperience}</p>
                        <p>Recipes: {chefDetails.numberOfRecipes}</p>

                        <div className='flex justify-between items-center'>
                            <button onClick={likeButton}>{like ? <FaThumbsUp className='h-8 w-8'></FaThumbsUp> : <FaRegThumbsUp className='h-8 w-8'></FaRegThumbsUp>}</button>

                        </div>
                    </div>
                </div>
            </div>
            <section className='chefBackground'>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
                    {
                        recipes.map(recipe =>
                            <div key={recipe.name} className="card w-96 mt-10 m-10 bg-base-100 shadow-xl">
                                <div className=" card-body">
                                    <h2 className="card-title text-xl font-bold">{recipe.recipeName}</h2>
                                    <h2 className='text-xl font-bold'>ingredients</h2>
                                    {
                                        recipe.ingredients.map(ingrd => <p>{ingrd[ingrd]}. {ingrd}</p>)
                                    }
                                    <p><span className='text-xl'>Cooking method :</span> {recipe.cookingMethod}</p>
                                    <p><span className='text-xl'>Rating :</span>{recipe.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={()=>favorite(recipe.id)}>{favour ? <FaHeart className='h-8 w-8  text-red-500'></FaHeart> : <FaRegHeart className='h-8 w-8 text-red-500'></FaRegHeart>}</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>

            </section>
        </section>
    );
};

export default RecipesDetails;
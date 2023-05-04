import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ThreeRecipes = ({recipe}) => {
    const [favour, setFavour] = useState(false)


    const favorite = () => {
        setFavour(true)
    }

    return (
        <div key={recipe.name} className="card w-96 mt-10 m-10 bg-base-100 shadow-xl">
            <div className=" card-body">
                <h2 className="card-title text-xl font-bold">{recipe.recipeName}</h2>
                <h2 className='text-xl font-bold'>ingredients</h2>
                {
                    recipe.ingredients.map(ingrd => <p> {ingrd}</p>)
                }
                <p><span className='text-xl'>Cooking method :</span> {recipe.cookingMethod}</p>
                <p><span className='text-xl'>Rating :</span>{recipe.rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={favorite}>{favour ? <FaHeart  className='h-8 w-8   text-red-500'></FaHeart> : <FaRegHeart className='h-8 w-8 text-red-500'></FaRegHeart>}</button>
                </div>
            </div>
        </div>
    );
};

export default ThreeRecipes;
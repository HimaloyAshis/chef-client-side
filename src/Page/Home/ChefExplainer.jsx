import React, { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ChefExplainer.css'



const ChefExplainer = ({ chef }) => {

    const [like, setLike] = useState(false)
    const { chefName, chefPicture, id, numberOfRecipes, yearsOfExperience } = chef


    const likeButton = () => {
        setLike(true)

    }

    return (
        <div className="max-w-sm white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <LazyLoadImage
                className="rounded-t-lg object-cover flex-grow" 
                src={chef.chefPicture} 
                alt=""
                
                
            />
            


            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {chef.chefName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: {chef.yearsOfExperience}</p>
                <p>Recipes: {chef.numberOfRecipes}</p>

                <div className='flex justify-between items-center mt-4 '>
                    <button className='bton'><Link to={`/recipesDetail/${chef.id}`}>View Recipes</Link></button>
                    <button onClick={likeButton}>{like ? <FaThumbsUp className='h-8 w-8'></FaThumbsUp> : <FaRegThumbsUp className='h-8 w-8'></FaRegThumbsUp>}</button>
                </div>
            </div>
        </div>
    );
};

export default ChefExplainer;
// import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaCircle, FaHeart, FaRegHeart, FaRegStar, FaStar,} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ThreeRecipe.css'
import Rating from 'react-rating';
// import ReactStars from "react-rating-stars-component";


const ThreeRecipes = ({ recipe }) => {
    const [favour, setFavour] = useState(false)
    
   
    const favorite = () => {
        setFavour(true)
        toast('Your favorite item added')

    }

    return (

        // recipe details

        <div key={recipe.name} className="card w-96 mt-10 px-2 bg-base-100 shadow-xl">
            <div className=" crd card-body text-black rounded">
                <ToastContainer></ToastContainer>
                <img className='rounded object-cover' src={recipe.image} alt="" />
                <h2 className="card-title text-xl font-bold">{recipe.recipeName}</h2>
                <h2 className='text-xl font-bold'>ingredients</h2>
                {
                    recipe.ingredients.map(ingrd => <p><FaCircle className='text-gray-500 inline-flex'></FaCircle> {ingrd}</p>)
                }
                <p><span className='text-xl'>Cooking method :</span> {recipe.cookingMethod}</p>
                
                <div  className='h-8 w-8'>
                    <Rating
                        className='flex'
                        placeholderRating={recipe?.rating}
                        readOnly
                        emptySymbol={<FaRegStar ></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p><span className='text-xl'></span>{recipe?.rating}</p>
                </div>
                 
                <div className="card-actions justify-end">
                    <button onClick={favorite} disabled={favour}>{favour ? <FaHeart className='h-8 w-8   text-red-500'></FaHeart> : <FaRegHeart className='h-8 w-8 text-red-500'></FaRegHeart>}</button>
                </div>
            </div>
        </div>
    );
};

export default ThreeRecipes;
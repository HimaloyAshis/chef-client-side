// import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaCircle, FaHeart, FaRegHeart,} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ReactStars from "react-rating-stars-component";


const ThreeRecipes = ({ recipe }) => {
    const [favour, setFavour] = useState(false)
    
   
    const favorite = () => {
        setFavour(true)
        toast('Your favorite item added')

    }

  

    

    return (
        <div key={recipe.name} className="card w-96 mt-10 m-10 bg-base-100 shadow-xl">
            <div className=" card-body">
                <ToastContainer></ToastContainer>
                <h2 className="card-title text-xl font-bold">{recipe.recipeName}</h2>
                <h2 className='text-xl font-bold'>ingredients</h2>
                {
                    recipe.ingredients.map(ingrd => <p><FaCircle className='text-gray-500 inline-flex'></FaCircle> {ingrd}</p>)
                }
                <p><span className='text-xl'>Cooking method :</span> {recipe.cookingMethod}</p>
                <p><span className='text-xl'>Rating :</span>{recipe.rating}</p>
                <div  className='h-8 w-8'>

                    {/* <ReactStars activeColor={'yellow'} size={20} isHalf={true} onChange={changeIt}></ReactStars> */}
                    {/* <Rating

                        className=''
                        placeholderRating={recipe?.rating}
                        readOnly
                        emptySymbol={<FaRegStar ></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    /> */}
                    {/* <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} /> */}
                </div>
                <div className="card-actions justify-end">
                    <button onClick={favorite} disabled={favour}>{favour ? <FaHeart className='h-8 w-8   text-red-500'></FaHeart> : <FaRegHeart className='h-8 w-8 text-red-500'></FaRegHeart>}</button>
                </div>
            </div>
        </div>
    );
};

export default ThreeRecipes;
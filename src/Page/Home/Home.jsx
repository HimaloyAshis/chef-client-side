import React, { useState } from 'react';
import './Home.css';
import { FaInstagram} from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import ChefExplainer from './ChefExplainer';
import { Helmet } from 'react-helmet';




const Home = () => {


    const chefs = useLoaderData()
    // console.log(chefs)
   

    return (
        <section className='bg-[#1B4242]'>

            <Helmet>
                <title>ToothSome | Home</title>
            </Helmet>
            {/* banner section */}
            <section className='bg'>
                <div className='flex justify-center items-center'>
                    <div className='Tooth mx-5'>
                        <h2 className='text-5xl '>Toothsome Space is a most popular restaurant in shanghai. </h2>
                        <p className='text-2xl mt-5'>Have a good day with Toothsome</p>
                    </div>
                    <div className='w-4/5 h-96 rounded'>
                        {/* <img src={chef1} alt="" /> */}
                    </div>
                </div>
            </section>
            {/* chef card section */}
            <section className='mt-28'>
                <h1 className='text-center text-5xl font-bold text-[#D4E2D4] mb-14' >Here are the best Chefs at Toothsome Space in Shanghai.</h1>
                <div className='mt-3 grid sm:grid-cols-1 gap-4 lg:grid-cols-3'>


                    {
                        chefs.map(chef => <ChefExplainer key={chef.id} chef={chef}></ChefExplainer>  )
                    }
                </div>
            </section>
            <section className='social mt-10'>

                <div className='w-44 h-52 mx-auto flex justify-center items-center'>
                    <button className="btn btn-outline btn-success"> <FaInstagram></FaInstagram > Follow us on Instagram</button>
                </div>
            </section>

            {/* blog section */}
            <section className='mt-10 mx-12 pb-10'>
                <h1 className='text-4xl font-extrabold'>Toothsome Space</h1>
                <p className='mt-8 tex-xl text-gray-300'>Toothsome Space, a restaurant in the Xuhui district that offers a playful and sophisticated ambiance, fusion cuisine, and creative desserts that are sure to satisfy your sweet tooth.

                    From the moment you walk through the doors of Toothsome Space, you'll feel like you've entered a different world. The whimsical illustrations on the walls and the oversized teeth on the ceiling create a fun and welcoming atmosphere that's perfect for all ages. It's clear that the restaurant's owners have paid attention to every detail, from the decor to the plating of the dishes.

                    Speaking of the dishes, the menu at Toothsome Space is truly unique. The chefs have combined flavors and ingredients from both Asian and Western cuisines to create dishes that are both familiar and unexpected. Start your meal with the crispy calamari, served with a zesty wasabi mayo dipping sauce. The spicy Sichuan chicken is another must-try dish, featuring tender chunks of chicken coated in a fiery sauce that will leave your taste buds tingling. And for vegetarians, the truffle mushroom risotto is a rich and satisfying option.

                    But what really sets Toothsome Space apart is its dessert menu. The restaurant's signature dish is the "Toothsome Teeth," a whimsical creation that looks like a set of teeth made from chocolate and filled with a refreshing raspberry sorbet. It's a must-try for anyone with a sweet tooth. Other standout desserts include the matcha tiramisu, which features layers of fluffy cake and creamy matcha mascarpone, and the caramelized banana with coconut ice cream.

                    Toothsome Space is more than just a restaurant – it's an experience. Whether you're looking for a unique date spot or a place to enjoy a fun night out with friends, Toothsome Space is sure to impress. Don't miss out on this one-of-a-kind dining destination in Shanghai.</p>
            </section>
        </section>
    );
};

export default Home;
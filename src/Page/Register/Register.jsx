import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState()


    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const url = form.url.value
        const password = form.password.value
        // console.log(name, email, password)

        if (password.length < 6) {
            setError('please put at least six password')
            return
        }

        // create User
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user

                updateUser(name, url)
                    .then()
                    .catch(error => console.log(error.message))
                form.reset()
            })
            .catch(error => console.log(error.message))


    }


    return (
        <div className='bg-[#1B4242] '>
            <Helmet>
                <title>ToothSome | SignUp</title>
            </Helmet>
            <div className='w-72 mx-auto py-10 '>
                <h2 className='text-center text-2xl font-bold mb-3'>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='your pass code' />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo URL</label>
                        <input type="url" id="url" name='url' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='photo url' />
                    </div>

                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800">Submit</button>

                </form>
                <h2>Already have an account? Please <Link to="/login" className='text-orange-500'>Login</Link></h2>
                <p className='mt-2 text-orange-500'>{error}</p>
            </div>
        </div>
    );
};

export default Register;
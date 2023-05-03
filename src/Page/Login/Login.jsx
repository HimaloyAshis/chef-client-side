import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const auth = getAuth(app)
const Login = () => {

    const { logIn } = useContext(AuthContext)

    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()



    const handleLogIn = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => console.log(error.message))

    }
    
    const GoogleLog =()=>{
        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.log(error.message))
    }

    const GitProLogin =()=>{
        signInWithPopup(auth, GithubProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.log(error.message))

    }



    return (

        <div className='w-72 mx-auto mt-3 mb-5'>
            <h2 className='text-center mt-5 text-2xl'>Please Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" name='checkbox' value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </form>
            <h2>Don't have an account? Please <Link to="/register" className='text-lime-700'>Register</Link></h2>

            <button onClick={GoogleLog} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <FaGoogle className='inline-flex'></FaGoogle>  Login with Google
                </span>
            </button>
            <br />
            <button onClick={GitProLogin} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   <FaGithub className='inline-flex'></FaGithub> Login with Github
                </span>
            </button>
        </div>

    );
};

export default Login;
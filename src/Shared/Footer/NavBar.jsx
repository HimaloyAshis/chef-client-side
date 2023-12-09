import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const NavBar = () => {

    const [Open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const outToLog = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))

    }

    return (
        <div className=''>

            <div>
                <span onClick={() => setOpen(!Open)} className='md:hidden'>

                    {
                        Open === true ? <XMarkIcon className='h-6 w-6 text-blue-500 cursor-pointer' /> :
                            <Bars3Icon className='h-6 w-6 text-blue-500 cursor-pointer' />
                    }
                </span>
            </div>
            <div className={` py-4 bg-[#4e706c] z-10 md:flex  absolute md:static  ${Open ? "top-10" : "-top-56"} rounded-md duration-500 `}>

                <div className="flex-1">
                    <h2 className="  default text-2xl font-extrabold"><i>Toothsome Space</i></h2>
                </div>
                <div className="">
                    <ul className="md:flex gap-2 sm:px-1">
                        <li >
                            <NavLink to={`/`} className={({ isActive }) => isActive ? 'active' : 'default'} >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/blog`} className={({ isActive }) => isActive ? 'active' : 'default'}>
                                Blog
                            </NavLink>
                        </li>
                        <li className='md:inline-flex gap-2'>
                            {user ? <><img className='rounded-full h-8 w-8' src={user?.photoURL} title={user?.displayName} alt="Author" /> <button className='default' onClick={outToLog}>LogOut</button></> : <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : 'default'}>
                                Login
                            </NavLink>}
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
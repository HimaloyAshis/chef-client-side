import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const outToLog= ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error.message))
        
    }

    return (
        <div className=''>
            <div className="navbar bg-[#4e706c]">

                <div className="flex-1">
                    <h2 className="  default text-2xl font-extrabold"><i>Toothsome Space</i></h2>
                </div>
                <div className="">
                    <ul className="flex gap-2 px-1">
                        <li>
                            <NavLink to={`/`} className={({isActive})=>isActive? 'active' : 'default'} >
                                Home
                            </NavLink>                           
                        </li>
                        <li>
                            <NavLink to={`/blog`} className={({isActive})=>isActive? 'active' : 'default'}>
                                Blog
                            </NavLink>
                        </li>
                        <li className='inline-flex gap-2'>
                            {user? <><img className='rounded-full h-8 w-8' src={user?.photoURL} title={user?.displayName}  alt="Author" /> <button className='default' onClick={outToLog}>LogOut</button></> : <NavLink to="/login" className={({isActive})=>isActive? 'active' : 'default'}>
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
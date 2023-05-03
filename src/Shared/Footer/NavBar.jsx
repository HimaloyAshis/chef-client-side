import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className=''>
            <div className="navbar bg-amber-200">
                <div className="flex-1">
                    <h2 className="  text-2xl font-extrabold"><i>Toothsome Space</i></h2>
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
                        <li>
                            {user? <img className='rounded-full' src={user?.picture}  alt="" /> : <NavLink to="/login" className={({isActive})=>isActive? 'active' : 'default'}>
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
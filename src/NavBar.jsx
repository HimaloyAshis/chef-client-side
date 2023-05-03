import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
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
                            <NavLink to={`/`} className={({isActive})=>isActive? 'active' : 'default'}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({isActive})=>isActive? 'active' : 'default'}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
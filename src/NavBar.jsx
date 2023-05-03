import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=''>
            <div className="navbar bg-amber-200">
                <div className="flex-1">
                    <h2 className=" btn-ghost normal-case text-2xl font-extrabold"><i>Toothsome Space</i></h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link>Home</Link>
                            <Link>Blog</Link>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
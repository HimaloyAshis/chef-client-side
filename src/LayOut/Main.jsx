import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Footer/NavBar';



const Main = () => {

    const noFooter = location.pathname.includes('login') || location.pathname.includes("logout")

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
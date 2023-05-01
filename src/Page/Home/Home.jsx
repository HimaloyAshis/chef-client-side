import React from 'react';
import './Home.css'
import { Avatar, Dropdown, Navbar, Spinner } from 'flowbite-react';

const Home = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='bg-orange-200 '
        >
           
           
            <Navbar.Collapse >
                <Navbar.Link
                    href="/navbars"
                    active={true}
                    className='mr-2'
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars " className='mr-2'>
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars" className='mr-2'>
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars" className='mr-2'>
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars" className='mr-2'>
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Home;
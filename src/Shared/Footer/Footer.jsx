import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black p-10 text-slate-200 grid sm:grid-cols-1 lg:grid-cols-3'>
            <div>
                <p>Subscribe us</p>
                <input className='rounded' required type="email" name="email" id="email" />
                <input className='bton ms-3' type="submit" value="Subscribe" />
                <br />
                <a>Privacy and policy</a>
                
                

            </div>
            <div>
                <p>visit us the following address</p>
                <p>Shanghai</p>
                <p>China’s central coast, China.</p>
                <br />
                <hr />
                <p>&copy; Right Reserved 2023</p>
            </div>
            <div>
                <p>Contact us</p>
                <p>Phone: +9990-38383939</p>
                <p>Email: toothsome@space98gmail.com</p>
                <div className='flex gap-4 mt-3'>
                    <FaInstagram className='h-8 w-8 text-red-500'></FaInstagram>
                    <FaFacebook className='h-8 w-8 text-blue-400'></FaFacebook>
                    <FaTwitter className='h-8 w-8 text-sky-500'></FaTwitter>
                    <FaLinkedin className='h-8 w-8 bg-sky-500'></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;
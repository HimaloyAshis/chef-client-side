import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black p-10 text-slate-200 grid sm:grid-cols-1 lg:grid-cols-3'>
            <div>
                <p>Subscribe us</p>
                <input className='rounded' required type="email" name="email" id="email" />
                <input className='bton ms-3' type="submit" value="Subscribe" />
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
            </div>
        </div>
    );
};

export default Footer;
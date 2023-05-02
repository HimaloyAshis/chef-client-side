import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaBeer, FaFrown } from 'react-icons/fa';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log('error', error.message, status)
    return (
        <div>
            <div className='text-yellow-400 flex flex-col justify-center items-center'>
                <FaFrown className='h-40 w-44'></FaFrown>
                <div className='text-center mt-3'>
                    <h2 className='mt-2'><span>error  </span>
                        {status || 404}
                    </h2>
                    <p className='mt2'>{error?.message}</p>
                    <p className='mt-2'>Please provide a valid URL</p>
                    <Link className='mt02' to="/">Back to home Page </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
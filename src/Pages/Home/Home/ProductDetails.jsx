import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <div className='h-96'>
            <div className='flex justify-center items-center mt-40'>
                <h2>Thank you for visite my website!!</h2>
            </div>
            <p className='font-bold text-center underline'><Link to='/'>Back to Page</Link></p>
        </div>
    );
};

export default ProductDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laborum itaque aspernatur, error aliquam impedit enim in accusamus libero dolor hic labore.
                 Nam quo consequatur, fugit magnam dignissimos modi vero debitis?</p>
                 <p>Go back to <Link to="/register">Register</Link></p>

        </div>
    );
};

export default Terms;
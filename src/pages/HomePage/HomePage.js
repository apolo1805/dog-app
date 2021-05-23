import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div className="p-home">
            <h1>Dog Book</h1>
            <div>
                <p>Click here to enter the dog book website</p>
                <Link className="btn btn-primary" to="/breeds">Woof</Link>
            </div>
        </div>
    );
}

export default HomePage;
import { Card, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './BreedComponent.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BreedComponent({dogName, changeSubBreed}) {

    const [imgSrc, setImgSrc] = useState('');

    let urlLink = "/" + dogName;

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + dogName + "/images/random").then(res => { 
            setImgSrc(res.data.message);
        });

    }, []);

    // async function showList() {
    //     const response = await axios.get("https://dog.ceo/api/breed/" + dogName + "/list").then(res => { return res.data.message });
        
    //     return response;
    // }

    return (
        <div className="c-breed">
            <Card>
                <Card.Body>
                    <Link to={urlLink}><h5>{dogName}</h5></Link>
                </Card.Body>

                <a href={imgSrc} target="_blank" rel="noreferrer">
                    <div className="img-container">
                        {imgSrc ? <img src={imgSrc} alt="specific dog breed"/> : 
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        }
                    </div>
                </a>
            </Card>
        </div>
    );
}

export default BreedComponent;
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import BreedComponent from '../../components/BreedComponent/BreedComponent';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './BreedsPage.css';

function BreedsPage() {

    const [breeds, setBreeds] = useState([]);
    const [filterInput, setFilterInput] = useState('');
    
    useEffect(() =>  {
        axios.get("https://dog.ceo/api/breeds/list/all").then(res => { 
            setBreeds(res.data.message);
        });
    }, [breeds]);

    return (
        <div className="p-breeds">
            <h1>Dogs Breeds</h1>
            <p>Click each dog's breed photo to see the phot in full screen, or filter a dog breed by input field</p>
            
            <div>
                <Button onClick={() => {setBreeds({})}}>Change Pictures</Button>
            </div>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Filter Dog Breed</InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl value={filterInput} onChange={(e) => setFilterInput(e.target.value)}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            {Object.keys(breeds).filter(breed => breed.includes(filterInput.toLowerCase())).map((breed, index) => <BreedComponent key={index} dogName={breed}/>)}

        </div>
    );
}

export default BreedsPage;
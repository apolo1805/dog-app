import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import SubBreedCard from '../SubBreedCard/SubBreedCard';

function SubBreedComponent() {

    const [subList, setSubList] = useState([]);
    const history = useHistory();

    let {breed} = useParams();

    async function getBreedList() {
        await axios.get("https://dog.ceo/api/breed/" + breed + "/list").then(res => setSubList(res.data.message));
    }

    useEffect(() => getBreedList(), [breed]);

    return (
        <div>
            <h3>Breed: {breed}</h3>
            <ul>
                {subList.length === 0 ? <p>There are no sub breeds for this dog breed</p> :
                subList.map((sub, index) => 
                    <li key={index}>
                        <SubBreedCard breed={breed} subBreed={sub}/>
                    </li>)}
            </ul>
            <Button onClick={() => history.goBack()}>Back</Button>
        </div>
    );
}

export default SubBreedComponent;
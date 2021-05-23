import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function SubBreedComponent() {

    const [subList, setSubList] = useState([]);
    const [subImg, setSubImg] = useState([]);

    let {breed} = useParams();


    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/list").then(res => {
            setSubList(res.data.message);
            res.data.message.map(subBreed => {
                axios.get("https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images/random").then(res => {
                    setSubImg(subImg.concat(res.data.message))
                });
            })
        });
    }, []);

    return (
        <div>
            <h3>Breed: {breed}</h3>
            <ul>{console.log(subList)}
                {subList.length === 0 ? <p>There are no sub breeds for this dog breed</p> :
                subList.map((sub, index) => 
                    <li key={index}>
                        <h5>{sub}</h5>
                        <img src={subImg[index]} width="100px"/>
                    </li>)}
            </ul>
        </div>
    );
}

export default SubBreedComponent;
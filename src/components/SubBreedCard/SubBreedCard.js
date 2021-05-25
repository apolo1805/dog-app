import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SubBreedCard({breed, subBreed}) {

    const [img, setImg] = useState("");

    useEffect(() => axios.get("https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images/random").then(res => setImg(res.data.message)), []);
    return (
        <div>
            <h4>{subBreed}</h4>
            <img src={img} width="200px"/>
        </div>
    );
}

export default SubBreedCard;
import React, { useState, useEffect } from 'react';
import { doApiGet } from '../service/apiService';


function Prods() {

    let [ prods_ar, setProds ] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3000"

        doApiGet(url)
            .then(data => {
                setProds(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='container'>

        </div>
    );
}

export default Prods;
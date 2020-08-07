import React, { useState, useEffect } from 'react';
import { doApiGet } from '../service/apiService';
import Items from './item';


function Products(props) {

    let [ prod_arr, setProds ] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3000/status1"
        doApiGet(url)
            .then(data => {
                setProds(data)
            })
    }, [])

    return (
        <div className="row">
            {prod_arr.map(item => {
                return (
                    <Items key={item.id} item={item} />
                )
            })}

        </div>
    );
}

export default Products;
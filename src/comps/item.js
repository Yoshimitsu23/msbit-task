import React from 'react';


function Items(props) {
    return (

        <div className="p-2 col-lg-12 col-sm-12 ">
            <div className='container border-left overflow-hidden rounded-left'>
                <img className="float-left rounded mr-2" src={props.item.url} alt="Card image cap" width="150" />
                <h5 className="card-title mt-2 ">{props.item.name}</h5>
                <div className="card-text text-dark">info - {props.item.description}</div>
            </div>
        </div>
    );
}

export default Items;


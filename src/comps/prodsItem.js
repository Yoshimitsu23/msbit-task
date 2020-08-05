import React from 'react';


function ProdsItem(props) {
    return (

        // <div className="p-2 col-lg-12 col-10">
        //     <div className="card" >
        //         <img className="card-img-top overflow-hidden" src={props.item.url} alt="Card image cap" height="200" />
        //         <div className="card-body">
        //             <h5 className="card-title">{props.item.name}</h5>
        //             <div className="card-text">description: {props.item.description}</div>
        //         </div>
        //     </div>
        // </div >


        <div className="p-2 col-lg-12 col-sm-12 ">
            <div className='container border overflow-hidden'>
                <img className="float-left" src={props.item.url} alt="Card image cap" height="200" />
                <h5 className="card-title">{props.item.name}</h5>
                <div className="card-text">description: {props.item.description}</div>
            </div>
        </div>
    );
}

export default ProdsItem;


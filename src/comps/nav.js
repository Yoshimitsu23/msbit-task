import React from 'react';


function Nav() {
    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <h1 className='display-4 bg-light'>Shop</h1>
            </div>
            <input type='text' placeholder='Search products' className='form-control btn-outline-info' /><br />
        </div>
    );
}

export default Nav;
import React from 'react';


function Nav() {
    return (
        <div className='container-fluid'>
            <div className='text-center'>
                <h1 className='display-4'>msBit</h1>
            </div>
            <input type='text' className='form-control col-lg-3' placeholder='Search' />
        </div>
    );
}

export default Nav;
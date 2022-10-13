import './Error.css'
import React from 'react';

const Error = () => {
   return (
      <div id="error-page" className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
         <h1 className='text-white fs-1'>No page found! Please enter currect URL!</h1>
      </div>
   );
};

export default Error;
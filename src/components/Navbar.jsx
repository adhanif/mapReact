import React from 'react';

export default function Navbar({ ipData }) {
  return (
    <>
      {ipData && (
        <div className='bg-dark text-white text-center flex flex-row'>
          <p className='small mb-0'>Your IP: {ipData.ip} </p>
          <p className=' small ml-5'>ISP: {ipData.organization}</p>{' '}
        </div>
      )}
    </>
  );
}

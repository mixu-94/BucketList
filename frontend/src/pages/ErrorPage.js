import React from 'react';
import Image404 from '../Assets/img/404.png';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[90.1vh]">
        <div>
          <img
            src={Image404}
            alt="404 :-/"
            className="w-20 animate-spin animate-bounce"
          />
        </div>
        <div className="bg-[#84A98C] text-center rounded-xl text-xl font-bold m-4 p-4">
          <h1 className="text-xl font-bold text-center">
            Booooooo, page not found
          </h1>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  
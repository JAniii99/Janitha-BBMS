import React from 'react';
import { Link } from 'react-router-dom';

const Cardd = (props) => {
  const { carddata, image, link } = props;

  return (
    <Link to={link}>
      <div
        className="flex items-center h-48 ml-5 mr-5 transition duration-200 ease-out transform border-2 shadow-lg cursor-pointer rounded-xl hover:scale-105"
        style={{ overflow: 'hidden', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex-grow w-3/5 mt-12 mb-12">
          <h5 className="pl-4 mx-12 mt-4 mb-4 text-lg font-bold tracking-tight text-center text-black uppercase">
            {carddata}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Cardd;

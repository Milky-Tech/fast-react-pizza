// import React from 'react'

import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const clas = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={clas} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={clas}>
      {children}
    </Link>
  );
};

export default LinkButton;

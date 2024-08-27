import React from 'react';
import { Link } from 'react-router-dom';

function BaseLink({ to, children, className }) {
  return (
    <Link to={to} className={`text-blue-500 hover:text-blue-700 ${className}`}>
      {children}
    </Link>
  );
}

export default BaseLink;
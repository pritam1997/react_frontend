import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      
      <NavLink to="/login">login</NavLink>
      <br />
      <NavLink to="/register">register</NavLink>
    </div>
  );
};

export default Navigation;

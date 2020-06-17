import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.scss';

const Toolbar = ({ children }) => {
  return <div className="Toolbar">{children}</div>;
};

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Toolbar;

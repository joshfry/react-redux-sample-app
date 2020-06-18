import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import './Screen.scss';

const Screen = ({ children }) => {
  return (
    <section className="Screen">
      <Header />
      <main className="main">{children}</main>
    </section>
  );
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;

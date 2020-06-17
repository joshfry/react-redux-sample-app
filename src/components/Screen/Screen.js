import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from 'components/Header';
import './Screen.scss';

const Screen = ({ children }) => {
  return (
    <div className="Screen">
      <Layout>
        <Header />
        <Layout.Content className="Screen__main">{children}</Layout.Content>
      </Layout>
    </div>
  );
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;

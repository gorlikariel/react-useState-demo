import React from 'react';
import Layout from './Layout.css';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import ClientCard from '../components/ClientCard/ClientCard';

export default () => {
  return (
    <div className="root">
      <div style={{ width: '100%' }}>
        <TopNavbar />
      </div>
      <div className="wrapper">
        <div className="left-box">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </div>
        </div>
        <div className="right-box">whaat</div>
      </div>
    </div>
  );
};

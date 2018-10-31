import React, { Component } from 'react';
import LayoutCss from './Layout.css';
import TopNavbar from '../components/TopNavbar/TopNavbar';
import Clients from './Clients/Clients';
import ClientDetails from '../components/ClientDetails/ClientDetails';

export default class Layout extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  state = {};
  render() {
    return (
      <div className="root">
        <div style={{ width: '100%' }}>
          <TopNavbar />
        </div>
        <div className="wrapper">
          <div className="left-box">
            <Clients />
          </div>
          <div className="right-box">
            <ClientDetails
              name="Dude"
              company="Lorem Beepsum"
              catchPhrase="is a catch!"
            />
          </div>
        </div>
      </div>
    );
  }
}

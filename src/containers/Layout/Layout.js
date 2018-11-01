import React, { Component } from 'react';
import LayoutCss from './Layout.css';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import Clients from '../Clients/Clients';
import ClientDetails from '../../components/ClientDetails/ClientDetails';

export default class Layout extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ users: data });
      })
      .then(fetch('https://randomuser.me/api/?page=3&results=10&seed=abc'))
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
  state = { users: null, currentUser: null, searchInput: null };
  render() {
    return (
      <div className="root">
        <TopNavbar
          searchChanged={value => this.setState({ searchInput: value })}
        />
        <div className="wrapper">
          <div className="left-box">
            <Clients
              searchInput={this.state.searchInput}
              selectUser={userId => this.setState({ currentUser: userId })}
              users={this.state.users}
            />
          </div>
          <div className="right-box">
            {this.state.users && this.state.currentUser ? (
              <ClientDetails
                name={this.state.users[this.state.currentUser - 1].name}
                company={
                  this.state.users[this.state.currentUser - 1].company.name
                }
                catchPhrase={
                  this.state.users[this.state.currentUser - 1].company
                    .catchPhrase
                }
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

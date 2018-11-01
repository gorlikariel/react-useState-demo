import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import LayoutCss from './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import ClientDetails from './components/ClientDetails/ClientDetails';
import Clients from './containers/Clients/Clients';
class App extends Component {
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
      <CssBaseLine>
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
                  unSelect={() => {
                    this.setState({ currentUser: null });
                  }}
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
      </CssBaseLine>
    );
  }
}

export default App;

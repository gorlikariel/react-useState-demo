import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import LayoutCss from './App.css';
import Blur from 'react-css-blur';

import TopNavbar from './components/TopNavbar/TopNavbar';
import ClientDetails from './components/ClientDetails/ClientDetails';
import Clients from './containers/Clients/Clients';
class App extends Component {
  async componentDidMount() {
    const getUsersPhotos = await fetch(
      'https://randomuser.me/api/?results=10&inc=picture'
    );
    const usersPhotos = await getUsersPhotos.json();
    this.setState({
      usersPhotos: usersPhotos.results.map((user, index) => ({
        ...usersPhotos.results[index].picture
      }))
    });

    const getUsersDataArray = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const usersDataArray = await getUsersDataArray.json();

    this.setState({
      users: usersDataArray.map((user, index) => ({
        ...user,
        ...usersPhotos.results[index].picture
      }))
    });
  }
  state = {
    users: null,
    currentUser: null,
    searchInput: null,
    usersPhotos: null
  };

  render() {
    return (
      <CssBaseLine>
        <div className="root">
          <TopNavbar
            searchChanged={value => this.setState({ searchInput: value })}
          />
          <div className="wrapper">
            <Blur radius={this.state.currentUser !== null ? '3px' : 0}>
              <div className="left-box">
                {this.state.users ? (
                  <Clients
                    searchInput={this.state.searchInput}
                    selectUser={userId =>
                      this.setState({ currentUser: userId })
                    }
                    users={this.state.users}
                    usersPhotos={this.state.usersPhotos}
                  />
                ) : (
                  <Clients
                    searchInput={this.state.searchInput}
                    selectUser={userId =>
                      this.setState({ currentUser: userId })
                    }
                    users={null}
                    usersPhotos={this.state.usersPhotos}
                  />
                )}
              </div>
            </Blur>
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
                  large={this.state.users[this.state.currentUser - 1].large}
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

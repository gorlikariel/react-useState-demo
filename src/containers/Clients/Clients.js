import React, { Component } from 'react';
import ClientCard from '../../components/ClientCard/ClientCard';

export default class Layout extends Component {
  state = { users: null };
  render() {
    const { users, selectUser, searchInput } = this.props;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        {users
          ? users.map(user => {
              if (!user.name.search(searchInput)) {
                return (
                  <ClientCard
                    selectUser={selectUser}
                    id={user.id}
                    key={user.name}
                    name={user.name}
                    company={user.company.name}
                    catchPhrase={user.company.catchPhrase}
                  />
                );
              }
              if (!searchInput) {
                return (
                  <ClientCard
                    selectUser={selectUser}
                    id={user.id}
                    key={user.name}
                    name={user.name}
                    company={user.company.name}
                    catchPhrase={user.company.catchPhrase}
                  />
                );
              }
            })
          : null}
      </div>
    );
  }
}

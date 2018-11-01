import React from 'react';
import ClientCard from '../../components/ClientCard/ClientCard';

export default React.memo(({ users, selectUser, searchInput, usersPhotos }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }}
  >
    <div className="clients">
      {users
        ? users.map((user, index) => {
            if (!user.name.search(searchInput)) {
              return (
                <ClientCard
                  selectUser={selectUser}
                  id={user.id}
                  key={user.name}
                  name={user.name}
                  company={user.company.name}
                  catchPhrase={user.company.catchPhrase}
                  large={user.large}
                  medium={user.medium}
                  thumbnail={user.thumbnail}
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
                  large={user.large}
                  medium={user.medium}
                  thumbnail={user.thumbnail}
                />
              );
            }
          })
        : Array.apply(null, Array(10)).map((user, index) => {
            return (
              <ClientCard
                selectUser={selectUser}
                id={'........'}
                key={index}
                large={null}
                medium={'........'}
                thumbnail={usersPhotos ? usersPhotos[index].thumbnail : '...'}
              />
            );
          })}
    </div>
  </div>
));

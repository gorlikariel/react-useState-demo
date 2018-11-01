import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    borderRadius: '20%'
  },
  image: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
    width: 128,
    height: 128
  }
};

function ClientDetails({ classes, name, company, catchPhrase }) {
  return (
    <>
      <div className={classes.root}>
        <div className={classes.image}>
          <Avatar
            alt={name}
            src="https://via.placeholder.com/150/a08784"
            className={classes.avatar}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            paddingLeft: '25px'
          }}
        >
          <Typography variant="title">NAME:</Typography>
          <Typography color="textSecondary" variant="h6">
            {name}
          </Typography>

          <Typography variant="title">COMPANY: </Typography>
          <Typography color="textSecondary" variant="h6">
            {company}
          </Typography>
          <Typography variant="title">CatchPhrase: </Typography>
          <Typography color="textSecondary" variant="h6">
            {catchPhrase}
          </Typography>
        </div>
      </div>
    </>
  );
}

ClientDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientDetails);

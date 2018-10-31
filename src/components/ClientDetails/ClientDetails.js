import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
    width: 300,
    height: 300
  }
};

function ClientDetails({ classes, name, company, catchPhrase }) {
  return (
    <>
      <div className={classes.row}>
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
    </>
  );
}

ClientDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientDetails);

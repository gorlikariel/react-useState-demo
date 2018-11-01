import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Cancel';

const styles = {
  root: {
    borderRadius: '20%'
  },
  image: {
    marginBottom: '20px',
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
  },
  deleteIcon: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '15px'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    paddingLeft: '15px',
    paddingBottom: '25px'
  }
};

const ClientDetails = ({
  classes,
  name,
  company,
  catchPhrase,
  unSelect,
  large
}) => {
  return (
    <>
      <div className={classes.deleteIcon}>
        <IconButton onClick={() => unSelect()}>
          <DeleteIcon />
        </IconButton>
      </div>

      <div className={classes.root}>
        <div className={classes.image}>
          <Avatar alt={name} src={large} className={classes.avatar} />
        </div>
        <div className={classes.text}>
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
};

export default withStyles(styles)(ClientDetails);

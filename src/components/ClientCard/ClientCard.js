import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    width: 300
    // height: 450
  },
  media: {
    height: 200
  },
  root: {
    // padding: '40px'
    paddingTop: '20px',
    paddingBottom: '20px'
  }
};

const ClientCard = ({
  classes,
  name,
  company,
  catchPhrase,
  id,
  selectUser
}) => {
  const [raised, setRaised] = useState(false);
  return (
    <div
      onTouchStartCapture={() => {
        setRaised(true);
      }}
      onTouchEndCapture={() => {
        setRaised(false);
      }}
      className={classes.root}
    >
      <Card raised={raised} className={classes.card}>
        <CardActionArea onClick={() => selectUser(id)}>
          <CardMedia
            className={classes.media}
            image="https://via.placeholder.com/600/a08784"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" noWrap>
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {company}
            </Typography>
            <Typography component="p">{catchPhrase} </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

ClientCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientCard);

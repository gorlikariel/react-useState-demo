import React, { useState, Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    width: 220
  },
  media: {
    height: 130
  },
  root: {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
};

const ClientCard = React.memo(
  ({
    classes,
    name,
    company,
    catchPhrase,
    id,
    selectUser,
    large,
    medium,
    thumbnail
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
            <Suspense
              fallback={
                <CardMedia
                  className={classes.media}
                  image={thumbnail}
                  title={name}
                />
              }
            >
              <CardMedia
                className={classes.media}
                image={large ? large : thumbnail}
                title={name}
              />
            </Suspense>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" noWrap>
                {!name ? 'Lorem Ipsum' : name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {!company ? 'Beep ammet' : company}
              </Typography>
              <Typography component="p">
                {!catchPhrase ? 'Hippity Hoppity boop' : catchPhrase}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
);

export default withStyles(styles)(ClientCard);

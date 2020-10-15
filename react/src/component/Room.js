import React from "react";
import PropTypes from "prop-types";
import "./Room.css"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Room({id,name,roomType,address,monthlyPayment,content,images}){
    const classes = useStyles();
    // console.log(images);
    const buffer = images // e.g., <Buffer 89 50 4e ... >
    const b64 = new Buffer(buffer).toString('base64')
    const mimeType = "image/png" // e.g., image/png

    return (
      <div style={{ marginLeft:'3%', marginTop:'3%'}}>
        <Card className={classes.root}>
          <CardActionArea href={`/RoomDetail/${id}`}>
            <CardMedia
              className={classes.media}
              component="img"
              src={`data:${mimeType};base64,${b64}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {roomType === 1 ? "원룸" : "오피스텔"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                월세 {monthlyPayment} 만원
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>       
    );
    
}

Room.propTypes = {
    name: PropTypes.string.isRequired,
    roomType: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
};

export default Room;
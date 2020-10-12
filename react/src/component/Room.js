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
      <div style={{marginLeft:'35%', marginTop:'3%'}}>
        <Card className={classes.root}>
          <CardActionArea>
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

       {/*  <Card className={classes.root} >
          <div aria-label='click' href={`/RoomDetail/${id}`}>
            <CardMedia
                component="img"
                className={classes.cover}
                src={`data:${mimeType};base64,${b64}`}
            />
            <div className="room">
                    <CardContent className={classes.content}>
                    <Typography align="left" component="h1" variant="subtitle1">
                        {roomType === 1 ? "원룸" : "오피스텔"}
                    </Typography>
                    <Typography component="h5" variant="subtitle1" color="textSecondary">
                        월세 {monthlyPayment} 만원
                    </Typography>
                    <Typography align="left" variant="subtitle1" color="textSecondary">
                         {address}
                    </Typography>
                    </CardContent>
                </div>
                      
          </div>
        </Card>

        <div>
            <br/><br/>
             <Card border="primary" style={{ width: '18rem', className :"component"}}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Img src = "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300" />
                </Card.Body>
            </Card>
        </div>
            
           
            <div className="room">
                <div className="room_data">
                    <h3 className = "room_name">{name}</h3>
                    <h5 className = "room_type">{roomType}</h5>
                    <h5 className = "room_address">{address}</h5>
                    <p className= "room_state">{monthlyPayment}</p>   
                </div>
            </div> */}
      </div>       
    );
    
}

Room.propTypes = {
    name: PropTypes.string.isRequired,
    roomType: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
};

export default Room;
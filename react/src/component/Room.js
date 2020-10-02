import React from "react";
import PropTypes from "prop-types";
import "./Room.css"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { RoomRounded } from "@material-ui/icons";

const id = '';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 25,
      width: 38,
    },
  }));

function Room({id,name,roomType,address,monthlyPayment,images}){

    const classes = useStyles();
    const theme = useTheme();

    const buffer = images // e.g., <Buffer 89 50 4e ... >
    const b64 = new Buffer(buffer).toString('base64')
    const mimeType = "image/png" // e.g., image/png

    return (
        
        <Card className={classes.root} >
          <IconButton aria-label='click' href={`/RoomDetail/${id}`}>
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
                      
          </IconButton>
        </Card>

        // <div>
        //     <br/><br/>
        //      <Card border="primary" style={{ width: '18rem', className :"component"}}>
        //         <Card.Header>{name}</Card.Header>
        //         <Card.Body>
        //             <Card.Img src = "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300" />
        //         </Card.Body>
        //     </Card>
        // </div>
            
           
            // {/* <br />
            // <div className="room">
            //     <div className="room_data">
            //         <h3 className = "room_name">{name}</h3>
            //         <h5 className = "room_type">{roomType}</h5>
            //         <h5 className = "room_address">{address}</h5>
            //         <p className= "room_progress">{progress}</p>   
            //     </div>
            // </div> */}
            );
    
}

Room.propTypes = {
    name: PropTypes.string.isRequired,
    roomType: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
};

export default Room;
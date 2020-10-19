import React, {useEffect, useState} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';

// 지도 표시용
import KakaoMap from './KakaoMap';
<<<<<<< HEAD
// 채팅
import Chat from './Chat';
=======

// import io from 'socket.io-client';
// const socket = io.connect('https://blog.nopublisher.dev');
// import io from 'socket.io-client';
>>>>>>> 969b1e1de0693f2dd4b4e4ca2d2c68cbe691aefe

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },

    fab: {
      position: 'fixed',
      bottom: '5em',
      right: '1em',
      zIndex: '4',
    },

    formWrapper: {
      padding: '1.0rem 0',
      borderBottom: '1px solid #eeeeee ',
      maxWidth: 360,
    },
    
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      borderBottom: '1px solid #22b8cf;'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],

      root: {},
      row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1)
      },
      spacer: {
        flexGrow: 1
      },
      importButton: {
        marginRight: theme.spacing(1)
      },
      exportButton: {
        marginRight: theme.spacing(1)
      },
      searchInput: {
        marginRight: theme.spacing(1)
      }
    },
  }));



function RoomDetail() {
    let [room, setRoom] = useState(null);
    // let [buffer, setBuffer] = useState(null);
    let [b64, setB64] = useState(null);
    let [mimeType, setMimeType] = useState(null);
    // const [user, setUser] = useState(null);
    const urlElements = window.location.pathname.split('/');
    const id = (urlElements[2])
    const classes = useStyles();

    // 카카오 맵 컴포넌트 
    const [mapView, setMapView] = useState(null);

    const tempStyle={
      margin : "0 auto",
      marginBottom : "3%",
      width:"300px",
      zIndex: '2',
    }

    // useEffect(() => {
    //     // socket.emit('message', {
    //     //   qq: "qq",
    //     // });

    useEffect(async () => {
        axios.get(`https://blog.nopublisher.dev/room/${id}`)
        .then((res) => {
            console.log(res.data);
            setRoom(res.data);
            let pp = new Buffer(res.data.images[0]).toString('base64');
            setB64(pp);
            setMimeType("image/png"); // e.g., image/png

            const {daum} = window;

            // 해당 주소에 대한 좌표를 받아서
            const coords = new daum.maps.LatLng(res.data.coordsy, res.data.coordsx);

            setMapView(<KakaoMap coords={coords}></KakaoMap>);
        }) 
    }, [])
  
  return(
  <div>
    {b64 ? <Card className={classes.root} style={{marginTop:'-3em',maxWidth:'376px'}} >
             <CardMedia
                component="img"
                className={classes.cover}
                src={`data:${mimeType};base64,${b64}`}
<<<<<<< HEAD
            /> : "loading"}
          </Card><br/>
          <h5>{room && room.content}</h5>
          <br />
          <div>
            <h5> 지도 </h5>
            {mapView && mapView}<br />
          </div>
          <div>
              <Button href='/chat' display="inline-block" variant="contained" size="large"  className={classes.margin} style={tempStyle}>
                  채팅하기
              </Button>
          </div>
          
          <br /> 
=======
            /> 
          </Card>  : ""}
          {b64 ? 
          <div style={tempStyle}>
              <br/>
              <h5>{room && room.address} </h5>
              <div style={{zIndex: '1'}}>
              <div class={classes.formWrapper}>
                  <h6>월세 {room && room.monthlyPayment} 만원 </h6>
                  <h6>평수 {room && room.acreage} m^2 </h6>
                  <h6>층수 {room && room.structure} 층 </h6>
                  <br></br>
              </div>
              <br/>
              <div class={classes.formWrapper}>
                  <h5>{room && room.content}</h5>
              </div>
                <br></br>
                <h5> 지도 </h5>
                <div style={{zIndex: '1'}}>
                   {mapView && mapView}<br />
                </div>
                  <Fab  color="primary" className={classes.fab}>
                    <ChatIcon />
                  </Fab>
                  <br />
              </div>
>>>>>>> 969b1e1de0693f2dd4b4e4ca2d2c68cbe691aefe
          <Button variant="contained" size="large"  className={classes.margin} style={tempStyle}
                  href = {`/contract/${id}`}>
                      계약하기
          </Button>
      </div>  : ""}
    </div>
    );
}

export default RoomDetail;
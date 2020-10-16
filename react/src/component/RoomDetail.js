import React, {useEffect, useState} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

// 지도 표시용
import KakaoMap from './KakaoMap';

// import io from 'socket.io-client';
// const socket = io.connect('https://blog.nopublisher.dev');
import io from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
    let [buffer, setBuffer] = useState(null);
    let [b64, setB64] = useState(null);
    let [mimeType, setMimeType] = useState(null);
    const urlElements = window.location.pathname.split('/');
    const id = (urlElements[2])
    const classes = useStyles();

    // 카카오 맵 컴포넌트 
    const [mapView, setMapView] = useState(null);

    const tempStyle={
      margin : "0 auto",
      marginBottom : "3%",
      width:"300px"
    }

    // useEffect(() => {
    //     // socket.emit('message', {
    //     //   qq: "qq",
    //     // });

    useEffect(async () => {
      // const socket = await io.connect('https://blog.nopublisher.dev/room/chat/0', {
      //   extraHeaders: {
      //     'Access-Control-Allow-Origin' : '*',
      //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
      //   }
      // });
      // console.log(socket);
      //   socket.emit('message', {
      //     qq: "qq",
       

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
        <div style={tempStyle,{marginLeft:'1em'}}>
          <h3>{room && room.address} </h3>
          <h5>월세 {room && room.monthlyPayment} 만원 </h5>
          <Card className={classes.root} style={{marginLeft:'0.5em'}} >
            <CardHeader />
            {b64 ? <CardMedia
                component="img"
                className={classes.cover}
                src={`data:${mimeType};base64,${b64}`}
            /> : "loading"}
          </Card><br/>
          <h5>{room && room.content}</h5>
          <br />
          <div>
            <h5> 지도 </h5>
            {mapView && mapView}<br />
          </div>
          <div>
              <Button display="inline-block" variant="contained" size="large" color="primary" className={classes.margin} style={{marginLeft:'0.5em', width:'150px',left:'5px', top:'120h'}}>
                  채팅하기
              </Button>
              <Button display="inline-block" variant="contained" size="large" color="primary" className={classes.margin} style={{marginLeft:'0.5em',width:'150px',left:'10px', top:'120h'}}>
                  수정하기
              </Button>
          </div>
          
          <br /> 
          <Button variant="contained" size="large" color="primary" className={classes.margin} style={{ width:'300px', height:'40px' , left:'20px', top:'100h'}}
                  href = {`/contract/${id}`}>
                      계약하기
          </Button>
          <br />
      </div>
    );
}

export default RoomDetail;
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Room from './Room';
import MyRoom from './MyRoom';
import { Avatar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ContractManage from "./ContractManage"
import Button from '@material-ui/core/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Badge from 'react-bootstrap/Badge'

import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);
  
const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(3),
    },
    demo1: {
      backgroundColor: theme.palette.background.paper,
    },
    demo2: {
      backgroundColor: '#2e1534',
    },
    formWrapper: {
        padding: '1.0rem 0',
        borderBottom: '1px solid #eeeeee ',
        maxWidth: 360,
      },
  }));


function Mypage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [rooms, setRooms] = useState(null);
    const [address, setAddress] = useState('');
  
    const getRooms = async () => {
      const roomsData = await axios.get('https://blog.nopublisher.dev/rooms',
          {
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
            }
          }
        ).then((res)=> {
            setRooms(res.data)
        })
  
      return roomsData;
  
    };

    useEffect (async () => {
      getRooms()
    },['']);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tempStyle={
        margin : "0 auto",
        marginLeft : "7%",
        marginBottom : "3%",
        display:"inline-block",
    }
    const tempStyle1={
        margin : "0 auto",
        marginTop : "-3%",
        marginLeft : "7%",
        marginBottom : "3%",
        display:"inline-block",
        position:"absolute",
        top:"40px"
    }

    const [user, setUser] = useState('');

    // const getUser = async () => {
    //     const userData = await axios.get('https://blog.nopublisher.dev/user/mypage',
    //     {
    //         headers: {
    //           "Content-Type" : "application/json"  
    //         }
    //       }
    //     )
    //     return userData;
    // }

    useEffect( () => {
            // var data = await getUser()
            let userInfo = JSON.parse(window.localStorage.getItem('user'));
            setUser(userInfo)
            console.log(userInfo);
    },[''])

   

    return(
        <div>
            <div style={tempStyle}>
                <Avatar src="/broken-image.jpg" />         
            </div>
            <div style={tempStyle1}>
                <Badge variant="secondary">{user.userType ===1 ? "임대인" : "임차인"}</Badge>{' '}
                <div>{user && user.name} 님 환영합니다</div>   
            </div>
            <div className={classes.root}>
                <div className={classes.demo1} style={{marginTop:"2em"}}>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                {user.userType ===1 ?
                <Tab eventKey="home" title="나의 매물">
                    <div class={classes.formWrapper}>
                   
                        <Button style={{marginTop: "0.5em",marginBotton: "4em", marginLeft:"0.5em"}} size="large"  className={classes.margin} 
                            href = "/RegisterRoom">
                            방 등록하기
                        </Button>
                    </div> 
                     {rooms && rooms.map(R => ( 
                        <MyRoom
                        id={R.id}
                        name={R.name}
                        roomType={R.roomType}
                        address={R.address}
                        state={R.state}
                        monthlyPayment={R.monthlyPayment}
                        images={R.images}
                        />   
                        ))}
                </Tab>
                : ""}
                <Tab eventKey="profile" title="최근 본 매물">
                    
                </Tab>
                <Tab eventKey="contact" title="계약서 관리">
                    
                </Tab>
                </Tabs>
                    {/* <AntTabs style={{marginLeft:"7%"}} value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="나의 매물">
                        
                        </AntTab>
                        <AntTab label="최근 본 매물" />
                        <AntTab label="계약서 관리" />
                    </AntTabs>
                    <Typography className={classes.padding} /> */}
                   
                </div>
            </div>
        </div>
    );
}

export default Mypage;
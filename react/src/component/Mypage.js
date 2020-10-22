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
import ShowContract from './ShowContract';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';


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
        marginLeft:"5%",
      },
      formWrapper1: {
        padding: '1.0rem 0',
        borderBottom: '1px solid #eeeeee ',
        maxWidth: 360,
        margin:"0% 0% 0% 5%",
        padding: "5% 0 20% 2%",
        fontSize: "0.8rem"
      },
  }));


function Mypage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [rooms, setRooms] = useState(null);
    const [address, setAddress] = useState('');
    const [tmp, setTmp] = useState(null);
    const [user, setUser] = useState('');

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

    const getUser = async () => {
        user.userType === 1 ?
        await axios.get(`https://blog.nopublisher.dev/lessor/${user.id}`,
            {
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
                }
            }
        ).then((res)=> {
            window.localStorage.setItem('user', JSON.stringify(res.date));
            setUser(res.data);
        })
        :
        await axios.get(`https://blog.nopublisher.dev/lessee/${user.id}`,
        {
            headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
            }
        }
        ).then((res)=> {
            window.localStorage.setItem('user', JSON.stringify(res.date));
            setUser(res.data);
        })
    }

    useEffect (async () => {
      getRooms()
      let userInfo = JSON.parse(window.localStorage.getItem('user'));
      setUser(userInfo)
      console.log(userInfo);
      await getUser();
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

    const logout = async() => {
        window.localStorage.removeItem('user');
        setTmp(1);
        console.log(tmp);
        console.log(user);
        
    }

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
                
                {user.userType ===1 ?
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="나의 정보">
                        <div class={classes.formWrapper1} style={{paddingBottom:"30px"}}>
                            지갑 주소
                            {user.address}
                        </div> 
                        <div class={classes.formWrapper1} style={{paddingBottom:"30px"}}>
                            밸런스
                        </div> 
                        <div class={classes.formWrapper}>
                            <Button style={{fontSize:"1rem", marginTop: "-0.5em"}} size="large"  className={classes.margin} 
                                    onClick={logout}>
                                    <bold>로그아웃</bold>
                                    {tmp && <Redirect to="/" /> }
                            </Button>
                            
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="나의 매물">
                        <div class={classes.formWrapper}>
                    
                            <Button style={{fontSize:"1rem", marginTop: "0.5em", marginLeft:"0.5em"}} size="large"  className={classes.margin} 
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
                    {/* <Tab eventKey="contact" title="계약서 관리">
                        {user && user.map(C => (
                            <ShowContract />
                        ))}
            
                        <ShowContract href={`/`}/> 
                    </Tab> */}
                </Tabs>
                : 
                
                <div style={{fontSize:"0.5em", marginTop: "0.5em",marginBotton: "4em", marginLeft:"0.5em"}} size="large"  className={classes.margin} >
                    <div style={{fontWeight:"bold", fontSize:"0.5em", marginTop: "0.5em",marginBotton: "4em", marginLeft:"7em"}}>
                        나의 정보
                    </div>
                    <div class={classes.formWrapper1}>
                            지갑 주소
                        </div> 
                        <div class={classes.formWrapper1}>
                            밸런스
                        </div> 
                        <div style={{fontWeight:"bold", fontSize:"0.5em", marginTop: "5em",marginBotton: "4em", marginLeft:"7em"}}>
                        계약서 관리
                        </div>
                        <div class={classes.formWrapper1}>
                        
                        </div> 
                        <div class={classes.formWrapper}>
                            <Button style={{fontSize:"1rem", marginTop: "-0.5em"}} size="large"  className={classes.margin} 
                                    onClick={logout}>
                                    <bold>로그아웃</bold>
                                    
                            </Button>
                            
                        </div>
                </div>
                
                }
                
                    {/* <AntTabs style={{marginLeft:"7%"}} value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="나의 매물">
                        
                        </AntTab>
                        <AntTab label="최근 본 매물" />
                        <AntTab label="계약서 관리" />
                    </AntTabs>
                    <Typography className={classes.padding} /> */}
                   
                </div>
                {tmp && <Redirect to="/" /> }
            </div>
            
        </div>
    );
}

export default Mypage;
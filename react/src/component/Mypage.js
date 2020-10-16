import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Avatar, Typography, Tab, Tabs } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ContractManage from "./ContractManage"
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

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
  }));


function Mypage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
        marginLeft : "7%",
        marginBottom : "3%",
        display:"inline-block",
        position:"absolute",
        top:"90px"
    }

    const [user, setUser] = useState('');

    const getUser = async () => {
        const userData = await axios.get('https://blog.nopublisher.dev/user/mypage',
        {
            headers: {
              "Content-Type" : "application/json"  
            }
          }
        )
        return userData;
    }

    useEffect(async () => {
            var data = await getUser()
            let user = JSON.parse(window.localStorage.getItem('user'));
            console.log(user);
    },[''])

   

    return(
        <div>
            <div style={tempStyle}>
                <Avatar src="/broken-image.jpg" />         
            </div>
            <div style={tempStyle1}>
                <div style={{top:"20px", left:"20px"}}>{user && user.name} 님 환영합니다</div>   
            </div>
            <div className={classes.root}>
                <div className={classes.demo1}>
                    <AntTabs style={{marginLeft:"7%"}} value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="나의 매물" />
                        <AntTab label="최근 본 매물" />
                        <AntTab label="계약서 관리" />
                    </AntTabs>
                    <Typography className={classes.padding} />
                </div>
            </div>
        </div>
    );
}

export default Mypage;
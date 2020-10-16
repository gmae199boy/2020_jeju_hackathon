import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Image} from "react-bootstrap";
import zip from './zip.png'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  },
  signup: {
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      color:'white'
    },
  },
}));

export default function NavBar() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{width:'300%'}}>
        <ListItem>
          <NavLink to="/" >홈</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/SearchRoom">매물 검색</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/RegisterRoom">매물 등록</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/MyPage">마이페이지</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/payment">결제</NavLink>
        </ListItem>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
            <AppBar size="responsive" position="fixed" style={{ background: '#28a745', width:"100%" }}>
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  {['Menu'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button style={{color:'white'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer style={{width:'200%'}} anchor={'left'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
                </IconButton>
                <Button style={{marginLeft:"15%"}}type="button" href='/'>
                  <img src ={zip} alt="zip"/>
                </Button>
                <Button style={{fontSize:'0.5rem',color:'white', marginLeft:"13%", paddingRight:"-3%"}} edge="end" href='/signup'>sign up</Button>
                <Button style={{fontSize:'0.5rem',color:'white', marginLeft:"-5%"}} edge="end" href='/login'>login</Button>
                {/* {authenticated ? (
                  <Button style={{color:'white'}} href='/login'>login</Button>
                ) : (
                  <Button logout={logout} style={{color:'white'}} href='/'>logout</Button>
                )}             */}
              </Toolbar>
            </AppBar>
          </div>
    </div>
  );
}

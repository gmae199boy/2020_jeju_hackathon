import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import zip from './zip.png'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "375px",
    position: "bottom"
  },
  appBar: {
    width: "375px",
    top: '610px',
    bottom: 0,
    position:'fixed',
    zIndex: '5',
  },
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

  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [user, setUser] = React.useState(null);


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
          <NavLink to="/SearchRoom" background={{color: "#686d76"}} >매물 검색</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/RegisterRoom">매물 등록</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/mypage">마이페이지</NavLink>
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

  useEffect(()=> {
    setUser(window.localStorage.getItem('user'));
  });

  return (
    <div>
      <BottomNavigation value={value} onChange={handleChange} className={classes.appBar}>
      <BottomNavigationAction href="/SearchRoom"label="매물검색" value="매물검색" icon={<SearchIcon />} />
      {/* <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} /> */}
      <Button style={{marginBottom: "2%"}} type="button" href='/'>
                   <img src ={zip} alt="zip"/>
      </Button>
      {/* <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} /> */}
      <BottomNavigationAction href="/mypage" label="mypage" value="mypage" icon={<PersonIcon />} />
      </BottomNavigation>
     <div className={classes.root}>
            {/* <AppBar size="responsive" position="fixed" style={{ background: 'white', width:"100%" }}>
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  {['menu'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button style={{color:'white'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer style={{width:'200%'}} anchor={'left'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
                </IconButton>
                <Button style={{fontSize:'0.5rem',color:'black', marginLeft:"13%", paddingRight:"-3%"}} edge="end" href='/signup'>sign up</Button>
                <Button style={{fontSize:'0.5rem',color:'black', marginLeft:"-5%"}} edge="end" href='/login'>login</Button>

                {user ? 
                  <Logout></Logout> : 
                  <Button style={{fontSize:'0.5rem',color:'white', marginLeft:"-5%"}} edge="end" href='/login'>login</Button>}
                {/* {authenticated ? (
                  <Button style={{color:'white'}} href='/login'>login</Button>
                ) : (
                  <Button logout={logout} style={{color:'white'}} href='/'>logout</Button>
                )}           
              </Toolbar>
            </AppBar> */}
          </div> 
    </div>
  );
}

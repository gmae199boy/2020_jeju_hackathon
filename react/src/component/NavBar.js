import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';


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

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      <a href='/Home'>
             <div style={{marginLeft:'6em', color: 'white'}} >집피스</div>
      </a>
      <List>
      <ListItem>
       <NavLink to="/Home">홈</NavLink>
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
        {/* {['매물 검색', '매물 등록', '마이페이지', '결제하기'].map((text, index) => (
          <ListItem button key={text}>
            text[0] href = '/SearchRoom'
            [1] href = '/RegisterRoom'
            [[2] herf - ''mhx
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      
      <Divider />
    </div>
  );

  return (
    <div>
    <AppBar position="fixed" title="asdasD" className={clsx(classes.appBar, {
         
        })}>

    </AppBar>
    
      
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon />{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const contentStyles = {
//     fontFamily: 'sans-serif',
//     textAlign: 'center',
//   }

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <NavLink to="/SearchRoom">매물 검색</NavLink>
//       </MenuItem>
//       <MenuItem>
//         <NavLink to="/RegisterRoom">매물 등록</NavLink>
//       </MenuItem>
//       <MenuItem>
//       <NavLink to="/MyPage">마이페이지</NavLink>
//     </MenuItem>
//     <MenuItem>
//       <NavLink to="/payment">결제</NavLink>
//     </MenuItem>
//     </Menu>
//   );


//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleMobileMenuOpen}
//           >
//             <MenuIcon />
//           </IconButton>
//           <a href='/Home'>
//             <div style={{marginLeft:'6em', color: 'white'}} >집피스</div>
//           </a>
//           <div className={classes.grow} />
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       <br />
//     </div>
    
//   );
// }

import React from "react";
import Nav from 'react-bootstrap/Nav'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import App from '../App';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


function Home(){
  const classes = useStyles();
    return(
      <div>
        <div style = {{marginTop: '10em'}}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              집피스
          </Typography>
        </div>
      </div>
    //     <React.Fragment>
    //     <CssBaseline />
    //     <AppBar position="relative">
    //       <Toolbar>
    //       <Navbar bg="#6610f2" variant="dark">
    //             <Nav className="mr-auto">
    //               <button onClick={this.goback}>뒤로</button>
    //               <Navbar.Brand href="/" >Home </Navbar.Brand>
    //                 <Nav.Link  href="/RegisterRoom"> 등록 </Nav.Link>
    //                 <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
    //             </Nav>
    //         </Navbar>
    //       </Toolbar>
    //     </AppBar>
    //     <br /><br /><br />
    // </React.Fragment>
    )
}


export default Home;
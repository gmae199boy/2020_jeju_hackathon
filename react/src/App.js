import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { rooms, RegisterRoom, report} from './';
import Home from "./component/Home"
import Login from "./component/Login";
import Signup from "./component/Signup";
import Intro from './component/Intro';
import SearchResult from './component/SearchResult';
import Contract from './component/Contract';
import NavBar from './component/NavBar';
import Payment from './component/Payment';
import PaymentComplete from './component/PaymentComplete';
import SearchRoom from './component/SearchRoom';
import RoomDetail from './component/RoomDetail';


const styles = {
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginRight: 'auto'
    },
  };
  
class App extends Component{

  constructor(props) {
        super(props);
        this.state = {
        toggle: false,
        };
    }
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
  render(){
    const { classes } = this.props;
    return( 
      <div>
        <Router>
        {/* <div className={styles.root}>
        <AppBar>
            <IconButton className={styles.menuButton}  color="inherit" 
            aria-label="open drawer" color="inherit" onClick={this.handleDrawerToggle}>
              <MenuIcon/>
            </IconButton>


          <Drawer open={this.state.toggle}>
            <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
          </Drawer>
        </AppBar>
        </div> */}


            {/* <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={this.useStyles.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={this.useStyles.title}>
                  
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar> */}
                {/* <CssBaseline />
                      <AppBar position="relative">
                        <Toolbar>
                        <Navbar bg="#6610f2" variant="dark">
                              <Nav className="mr-auto">
                              
                                <Navbar.Brand href="/" >Home </Navbar.Brand>
                                  <Nav.Link  href="/RegisterRoom">매물 등록 </Nav.Link>
                                  <Nav.Link  href="/SearchRoom">매물 검색 </Nav.Link>
                                  <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
                              </Nav>
                          </Navbar>
                        </Toolbar>
            </AppBar> */}
                

              <div>
                <Route path='/' component={NavBar}/>
                <Route path='/Home' component={Home}/>
                <Route exact path='/' component={Intro}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Signup' component={Signup}/>
                <Route path='/rooms' component={rooms}/>
                <Route path='/RegisterRoom' component={RegisterRoom}>
                  <RegisterRoom onCreate={this.handleCreate} />  
                </Route>
                <Route path='/report' component={report}/>
                <Route path='/SearchRoom' component={SearchRoom}/>
                <Route path='/RoomDetail' component={RoomDetail}/>    
                <Route path='/payment' component={Payment}/>  
                <Route path='/paymentComplete' component={PaymentComplete}/>   
                <Route path='/searchResult' component={SearchResult}/>  
                <Route path='/contract' component={Contract}/>      
              </div>
        </Router>
      </div>
      
      );
    }
  }
  export default App;
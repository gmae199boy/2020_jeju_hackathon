import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { rooms, RegisterRoom, report} from './';
import Login from "./Login";
import Signup from "./Signup";
import Home  from './Home';
import Title from './Title';
import Nav from 'react-bootstrap/Nav'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Tab, Row, Col} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

class App extends Component{
  // componentDidMount() {
  //   console.log(this.props);
  // }
  
  goBack = () => {
    this.props.history.goBack();
  };

  state = {
    isLoading: true,
    room: []
  };
  render(){
    return( 
      <div className="App">
        {/* <button onClick={this.goback}>뒤로</button> */}
              <CssBaseline />
              <AppBar position="relative">
                <Toolbar>
                <Navbar bg="#6610f2" variant="dark">
                      <Nav className="mr-auto">
                       
                        <Navbar.Brand href="/" >Home </Navbar.Brand>
                          <Nav.Link  href="/RegisterRoom"> 등록 </Nav.Link>
                          <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
                      </Nav>
                  </Navbar>
                </Toolbar>
              </AppBar>
              <br /><br /><br />

            <div>
              <Route path='/' component={Home}/>
              <Route exact path='/' component={Title}/>
              <Route path='/Login' component={Login}/>
              <Route path='/Signup' component={Signup}/>
              <Route exact path='/rooms' component={rooms}/>
              <Route path='/RegisterRoom' component={RegisterRoom}/>
              <Route path='/report' component={report}/>
              
            </div>
      </div>
      
      );
    }
  }
  export default withRouter(App);
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
        <li>asdasd</li>
      </div>
      
      );
    }
  }
  export default withRouter(App);
import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import RegisterRoom from './component/RegisterRoom';
import Mypage from './component/Mypage';
import Chat from './component/Chat';
import Logout from "./component/Logout";

function App(){
    return( 
      <Router>
          <div style={{paddingTop: '2em'}}>
          {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>    */}
          <div>
            <Route path='/' component={NavBar}/>
            <Route path='/Home' component={Home}/>
            <Route exact path='/Intro' component={Intro}/>
            <Route exact path='/' component={Login} />
            <Route path='/Signup' component={Signup}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/RegisterRoom' component={RegisterRoom}/>
            {/* <Route path='/report' component={report}/> */}
            <Route path='/SearchRoom' component={SearchRoom}/>
            <Route path='/RoomDetail' component={RoomDetail}/>    
            <Route path='/payment' component={Payment}/>  
            <Route path='/paymentComplete' component={PaymentComplete}/>   
            <Route path='/searchResult' component={SearchResult}/>  
            <Route path='/contract' component={Contract}/>
            <Route path='/mypage' component={Mypage}/>
            <Route path='/chat' component={Chat}/>
          </div>
        <br />
        <br />
        <br />
      </div>
      </Router>  
      );
    }
  export default App;
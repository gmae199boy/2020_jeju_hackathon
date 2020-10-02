import React, {Component, useState, useStyles, useEffect} from "react";
import axios from "axios";
import Room from "./Room";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const urlElements = window.location.pathname.split('/');
const address = (urlElements[2]);

class SearchResult extends Component{
    state = {
        isLoading:true,
        rooms: null,
    };
    

    getRooms = async () => {
        const rooms = await axios.get(`https://blog.nopublisher.dev/rooms/${address}`);
        console.log(rooms);
        this.setState({ rooms , isLoading: false });
        console.log(this.state.rooms);
    };
    componentDidMount(){
        this.getRooms();
    }
    render(){
        const {rooms} = this.state;
        return(
            <div>
                <section className="container"> 
                <div className="rooms">
                {/* {rooms && rooms.data[0].name} */}
                {/* //forEach(R => (
                  // <div onPress={()=>{roomPage(navigation, id);}} className="unstyled-button" >
                //   <Room */}
                {/* //     id={R.id}
                //     name={R.name}
                //     roomType={R.roomType}
                //     address={R.address}
                //     // state={R.state}
                //     monthlyPayment={R.monthlyPayment}
                //     // images={R.images}
                //   />
                //   // </div>
                // ))} */}
                
                {rooms && rooms.data.map(R => (
                  <Room
                    name={R.name}
                    roomType={R.roomType}
                    deposit={R.deposit}
                    address={R.address}
                    progress={R.progress}
                    images={R.images}
                  />
                ))}
              </div>
                </section>
            </div>
        );
    }
    
}

export default SearchResult;
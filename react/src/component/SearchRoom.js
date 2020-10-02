import React, {Component, onClick} from "react";
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


const RoomPage = (nav, object) => {
  nav.navigate({
     routeName: 'roomPage',
     params: {
         id: object,
     } ,
  });
}
class SearchRoom extends Component{
  state = {
    isLoading: true,
    rooms: [],
    address:''
  };
  getRooms = async () => {
    const rooms = await axios.get("https://blog.nopublisher.dev/rooms");
    console.log(rooms);
    this.setState({ rooms , isLoading: false });
  };
  componentDidMount(){
    this.getRooms();
  }

  useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
  }));

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
    // console.log(address);
  }
  // handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.onCreate(this.state);
  //     this.setState({
  //         address: '',
  //     })
  // }

  render() {
    const {isLoading, rooms, name, address, id, navigation} = this.state;
    return (
    // <form onSubmit={this.handleSubmit}>
      <div>
        <div className={this.search}>
            <div className={this.searchIcon}>
              <SearchIcon style={{marginLeft:'1em',marginRight:'0.7em'}} />

              <Input
                  placeholder="Search…"
                  // classes={{
                  //   root: this.inputRoot,
                  //   input: this.inputInput,
                  // }}
                  inputProps={{ 'aria-label': 'search' }}
                  style={{marginRight:'2em'}}
                  value={this.state.address}
                  onChange={
                    this.handleChange
                  }
                  name="address"
            />    
            <Button variant="contained" type="submit" href={`/searchResult/${this.state.address}`}
                    // onClick={
                    //   () => {
                    //   console.log(this.state.address);
                    //     axios({
                    //       method: 'GET',
                    //       url: `https://blog.nopublisher.dev/rooms/${this.state.address}`,
                    //   })
                    //   }
                   
                    // }
                    > 검색하기 </Button>
            </div>
          </div>
          <br />
        <section className="container"> 
          {isLoading ? (
            <div className ="loader">
                <span className="loader__text">Loading...</span>
            </div> 
            ) : ( 
              <div className="rooms">
                {rooms && rooms.data.map(R => (
                  // <div onPress={()=>{roomPage(navigation, id);}} className="unstyled-button" >
                  <Room
                    id={R.id}
                    name={R.name}
                    roomType={R.roomType}
                    address={R.address}
                    state={R.state}
                    monthlyPayment={R.monthlyPayment}
                    images={R.images}
                  />
                  // </div>
                ))}
                
                {/* {rooms && rooms.data.map(R => (
                  <Room
                    name={R.name}
                    roomType={R.roomType}
                    deposit={R.deposit}
                    address={R.address}
                    progress={R.progress}
                  />
                ))} */}
              </div>
          )}
      </section>           
      </div>
    // </form>
    );
  }
}

export default SearchRoom;

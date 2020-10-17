import React, {useState, useEffect} from "react";
import axios from "axios";
import Room from "./Room";
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';



function Intro() {
  const [rooms, setRooms] = useState(null);
  const [address, setAddress] = useState('');

  const tempStyle={
    margin : "0 auto",
    marginLeft : "7%",
    marginBottom : "3%"
  }

  const getRooms = async () => {
    const roomsData = await axios.get('https://blog.nopublisher.dev/rooms',
        {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
        }
      )
    // console.log(roomsData.data);
    return roomsData;
    
    // setState({ rooms });
  };

  // const useFunc =()=>{
  //     const data = await getRooms();
  //     console.log(data.data[0]);
  //     setRooms(data.data)
    
  // }
  useEffect (async () => {
    // useFunc()
    var data = await getRooms()
    setRooms(data.data)
  },['']);
  
  const useStyles = makeStyles((theme) => ({
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

  const changeAddress = e => {
    setAddress(e.target.value);
    console.log(rooms);
  }
  return (
    <div>
      <div style = {tempStyle}>
        {/* {rooms && rooms.map(r=><li>{r.name}</li>)} */}
      <SearchIcon style={tempStyle, {marginRight:'3%'}} />
      <Input
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search', 'length': '80% '}}
          style={{marginRight:'2em'}}
          // value={address}
          onChange={
            changeAddress
          }
          name="address"
    />
    <Button variant="contained" type="submit" href={`/searchResult/${address}`}
              > 검색하기 </Button>
    </div>   
      
    <div style={{ margin : "0 auto"}}>
      {rooms && rooms.map(R => ( 
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
    ))}
    </div>
    </div>
  );
}

export default Intro;

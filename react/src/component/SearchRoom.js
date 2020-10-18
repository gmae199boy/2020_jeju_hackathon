import React, {useState, useEffect} from "react";
import axios from "axios";
import Room from "./Room";
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    flex :1,
    marginRight: 0,
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0, 1),
      width: 'auto',
    },
  },
  searchIcon: {
    marginTop:'2px',
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
    paddingLeft: '10px',
    // paddingBottom: '2px',
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // }
  },
}));

function SearchRoom() {
  const [rooms, setRooms] = useState(null);
  const [address, setAddress] = useState('');
  const classes = useStyles();

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


  const changeAddress = e => {
    setAddress(e.target.value);
    console.log(rooms);
  }
  return (
    <div>
      <div style = {tempStyle}>
        {/* {rooms && rooms.map(r=><li>{r.name}</li>)} */}
        <div>
            <div>
              <SearchIcon style={{marginTop:'6px', float:'left'}}/>
            </div>
            {/* <InputBase
            className={classes.margin}
            placeholder="Search…"
            defaultValue="Naked input"
            inputProps={{ 'aria-label': 'naked' }}
          /> */}
            <InputBase 
              style={{float:'left'}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' , 'length': '80% '}}
              style={{marginRight:'1em', paddingBottom:'1em',marginLeft:'10px'}}
             
            />
            <Button style={{float:'right', paddingLeft: '0px'}} type="submit" href={`/searchResult/${address}`}
              > 검색 
            </Button>
          </div>
      {/* <SearchIcon style={tempStyle, {marginRight:'3%'}} /> */}
      {/* <Input
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search', 'length': '80% '}}
          style={{marginRight:'2em'}}
          // value={address}
          onChange={
            changeAddress
          }
          name="address"
    /> */}

    </div>   
      
    <div>
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

export default SearchRoom;

import React, {Component} from "react";
import axios from "axios";
import Room from "./Room";

const urlElements = window.location.pathname.split('/');
const address = (urlElements[2]);

function SearchResult(){
    // state = {
    //     isLoading:true,
    //     rooms: null,
    // };
    

    // getRooms = async () => {
    //     const rooms = await axios.get(`https://blog.nopublisher.dev/rooms/${address}`);
    //     console.log(rooms);
    //     this.setState({ rooms , isLoading: false });
    //     console.log(this.state.rooms);
    // };
    // componentDidMount(){
    //     this.getRooms();
    // }

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

export default SearchResult;              
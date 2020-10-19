import React, {useState, useEffect} from "react";
import axios from "axios";
import Room from "./Room";


function SearchResult(){
  const [rooms, setRooms] = useState(null);

  const urlElements = window.location.pathname.split('/');
  const address = urlElements[2];

    const getRooms = async () => {
      const roomsData = await axios.get(`https://blog.nopublisher.dev/rooms/${address}`,
          {
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
            }
          }
        )
      return roomsData;
  
    };

    useEffect (async () => {
      // useFunc()
      var data = await getRooms()
      setRooms(data.data)
    },['']);

        return(
            <div>
                <section className="container"> 
                <div className="rooms">
                
                {rooms && rooms.map(R => ( 
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
                </section>
            </div>
        );
    }

export default SearchResult;              
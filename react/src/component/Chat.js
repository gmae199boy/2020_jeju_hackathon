import React, {useState, useEffect} from "react";

import io from 'socket.io-client';

function Chat() {
    const [socket, setSocket] = useState(null);

    useEffect(async () => {
        setSocket(await io.connect('https://blog.nopublisher.dev/room/chat/0', {
        //   extraHeaders: {
        //     'Access-Control-Allow-Origin' : '*',
        //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
        //   }
        }));
        console.log(socket);
        socket.emit('message', {
            qq: "qq",
        });
    },[])

    return (
        <div>

        </div>
    )
}

export default Chat;
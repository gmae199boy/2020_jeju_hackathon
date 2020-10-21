import React, {useState, useEffect, useRef} from "react";
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import ChatContent from './ChatContent';

function Chat() {
    const [socket, setSocket] = useState(new WebSocket("ws://blog.nopublisher.dev/room/chat/"));
    const [user, setUser] = useState(window.localStorage.getItem('user'));
    const [text, setText] = useState(null);
    const [content, setContent] = useState(new Array());
    const [b, setB] = useState(null);

    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
            socket.onmessage = async function (event) {
                console.log(event);
                const json = JSON.parse(event.data);
                console.log(json);
                let data = content;
                data.push(json);
                console.log(data);
                setContent(data);
            }
            socket.onopen = function(e) {
                console.log(e);
            }
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        setB( b + 1);
        console.log(b);
    }, 1000);

    // useEffect(async () => {
    //     socket.onmessage = async function (event) {
    //         console.log(event);
    //         const json = JSON.parse(event.data);
    //         console.log(json);
    //         let data = content;
    //         data.push(json);
    //         console.log(data);
    //         setContent(data);
    //     }
    //     socket.onopen = function(e) {
    //         console.log(e);
    //     }
    // },[content])

    const click = async () => {
        socket.send(JSON.stringify({type:"message", content: text, userName: user.name}));
    }

    const setContents = async (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                {/* {content[0] && content} */}
                {content[0] && content.map(con => {
                    return (<div>{con.name}</div>);
                })}
            </div>
            <Input placeholder="채팅을 입력해" onChange={setContents}/>
            <Button onClick={click} variant="contained" />
        </div>
    );
}

export default Chat;
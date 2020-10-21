import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import ChatContent from './ChatContent';

function Chat() {
    const [socket, setSocket] = useState(new WebSocket("ws://blog.nopublisher.dev/room/chat/"));
    const [user, setUser] = useState(window.localStorage.getItem('user'));
    const [text, setText] = useState(null);
    const [content, setContent] = useState(new Array());

    useEffect(async () => {
        socket.onmessage = async function (event) {
            console.log(event);
        }
        socket.onopen = function(e) {
            console.log(e);
        }
    },[content])

    const click = async () => {
        socket.send(JSON.stringify({type:"message", content: text, userName: user.name}));
    }

    const setContents = async (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <ChatContent content={text}/>
            <Input placeholder="채팅을 입력해" onChange={setContents}/>
            <Button onClick={click} variant="contained" />
        </div>
    );
}

export default Chat;
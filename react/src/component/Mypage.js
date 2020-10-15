import React, {useEffect, useState} from "react";
import axios from 'axios';

function Mypage() {

    const [user, setUser] = useState(null);

    useEffect(async ()=> {
        const userFetch = await axios({
            method: 'GET',
            url: `https://blog.nopublisher.dev/user/mypage`,
        });
        setUser(userFetch);
        console.log(user);
    },[])

    return(
        <div>
            mypage
            {user && user.name}
        </div>
    );
}

export default Mypage;
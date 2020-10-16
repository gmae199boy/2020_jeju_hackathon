import React, {useEffect, useState} from "react";
import axios from 'axios';

function Mypage() {

    const [user, setUser] = useState(null);

    useEffect(async ()=> {
        const userFetch = await axios.get(`https://blog.nopublisher.dev/user/mypage`,{
            withCredentials: true
        });

        setUser(userFetch);
        console.log(userFetch);
    },[])

    return(
        <div>
            mypage
            {user && user.name}
        </div>
    );
}

export default Mypage;
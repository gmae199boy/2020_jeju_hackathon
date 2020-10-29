import React from "react";
import {useEffect, useState} from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function PaymentComplete(){
    // let [amount, setAmount] = useState('');
    // let [result, setResult] = useState('');

    useEffect(() => {
        // axios.get(`https://blog.nopublisher.dev/payment`)
        // .then((res) => {
        //     console.log(res.data);
        //     setRoom(res.data);
        // })
    }, []);

    return(
      <div>
        <Typography style={{marginTop: "10em"}} component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    " 계약이 완료되었습니다. "
        </Typography>

        <Button style={{marginTop:'4em', marginLeft:'4em', width:'70%'}} variant="contained" size="large" type="submit" background-color="#6610f2"
            href="/mypage">확인</Button>
 
    </div>
    );
}
export default PaymentComplete;
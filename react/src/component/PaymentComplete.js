import React from "react";
import {useEffect, useState} from "react";
import Typography from '@material-ui/core/Typography';

function PaymentComplete(){
    let [amount, setAmount] = useState('');
    let [result, setResult] = useState('');

    useEffect(() => {
        // axios.get(`https://blog.nopublisher.dev/payment`)
        // .then((res) => {
        //     console.log(res.data);
        //     setRoom(res.data);
        // })
    }, []);

    return(
      <div>
        <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    " 결제가 완료되었습니다. "
        </Typography>
    </div>
    );
}
export default PaymentComplete;
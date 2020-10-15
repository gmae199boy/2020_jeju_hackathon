import React from "react";
import {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Payment(){
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
                    결제하기
            </Typography>
        <br />
        <input style={{marginLeft:'3em'}} width = '15px' placeholder="결제할 금액을 적어주세요" onChange={(e) => {
            setAmount(e.target.value);
        }} />
        
        <Button style={{marginLeft:'1em'}} variant="contained" color="primary" onClick={() =>{
            console.log(amount);
            let string = {
                amount: amount,
            };
            let json = JSON.stringify(string);
            console.log(json);
            fetch("https://blog.nopublisher.dev/payment", {
                method: 'POST',
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
            .then(json => {
                setResult(json);
                console.log(json);
                window.location.href = json.next_redirect_pc_url;
            })
        }
        } >확인 </Button>
      </div>
    );
}

export default Payment;
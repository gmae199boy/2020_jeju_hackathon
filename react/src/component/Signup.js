import React,{ useState } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input}from 'reactstrap';
import axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';



function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    const checkUserType = (e) => {
        userType === 1 ? 
        axios.post('https://blog.nopublisher.dev/lessor/signup',
            {
                name: name,
                password:password,
            },
            {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        ).then(console.log) 
        // axios({
        //     method: 'POST',
        //     url: `https://blog.nopublisher.dev/lessor/signup`,
        //     body: JSON.stringify({
        //         name: name,
        //         password: password,
        //     })
        // }).then(console.log) 
        : axios.post('https://blog.nopublisher.dev/lessee/signup',
        {
            name: name,
            password:password,
        },
        {
            headers: {
                "Content-Type" : "application/json"
            }
        }
    ).then(console.log)
    }

    const onClick1 = () => {
        setUserType(1);
        console.log(userType) 
    }
    const onClick2 = () => {
        setUserType(2);
        console.log(userType) 
    }

        return(
            <div>
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            onClick={onClick1}
                            label="임대인"
                        />
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            label="임차인"
                            onClick={onClick2}
                        />
                {/* <label = "userType">
                    <input type="checkbox" name = "userType" value="0" onclick="oneCheckbox(this)">   donor  </le><br>
                            <span class="txt1 p-b-11"><label for = "userType"><input type="checkbox" name = "userType" value="1" onclick="oneCheckbox(this)">   recipient  </label></span> */}

              
                    <Label>Name</Label>
                    <Input 
                           placeholder="name"
                           onChange={onChangeName}
                           />
\
                    <Label>PASSWORD</Label>
                    <Input 
                           placeholder="Password"
                           onChange={onChangePassword}
                           />

                <Button className="btn-lg btn-dark btn-block"
                   onClick={checkUserType}
                    >
                    Signup
                </Button>
                <div className="text-center">
                    <a href="/login">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">forgot password</a>
                </div>

            </div>
                    
        );
    }

export default Signup;
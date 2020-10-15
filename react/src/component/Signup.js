import React,{ useState } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
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
    const [session, setSession] = useState('');


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    const checkUserType = (e) => {
        console.log(userType)
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
            }).then(setSession)
            : axios.post('https://blog.nopublisher.dev/lessee/signup',
            {
                name: name,
                password:password,
            },
            {
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(setSession)
    }

    const onClick1 = () => {
        setUserType(1);
    }
    const onClick2 = () => {
        setUserType(2);
    }

        return(
        <div className="auth-wrapper" style={{paddingTop: '2em'}}>
            <div className="auth-inner">    
                <div>
                        <h3>SIGN UP</h3>

                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            onClick={onClick1}
                            label="임대인"
                        /> 임대인
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            label="임차인"
                            onClick={onClick2}
                        /> 임차인

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={onChangeName}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={checkUserType}>Sign up</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                </div>
            </div>
            {session && <Redirect to="/" /> }
        </div>           
        );
        
    }

export default Signup;
import React,{ useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


export function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [session, setSession] = useState('');


    const tempStyle={
        margin : "0 auto",
        marginBottom : "3%",
        width:"300px"
    }
    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    const checkUserType = (e) => {
        console.log(userType)
        userType === 1 ? 
        axios.post('https://blog.nopublisher.dev/lessor/login',
            {
                name: name,
                password:password,
            },

            // {
            //     headers: {
            //         'Access-Control-Allow-Origin' : 'http://localhost:3000',
            //         "Content-Type" : "application/json"
            //     }
            // },
            {
                withCredentials: true
            }).then((res) => {
                // setSession(res)
                // console.log(res)
                // console.log(res.headers['set-cookie'])
                // console.log(res);
                setSession(res); 
                console.log(res.data);
                window.localStorage.setItem('user', JSON.stringify(res.data));
            })
            : axios.post('https://blog.nopublisher.dev/lessee/login',
            {
                name: name,
                password:password,
            },
            // {
            //     headers: {
            //         'Access-Control-Allow-Origin' : '*',
            //         "Content-Type" : "application/json"
            //     }
            // },
            {
                withCredentials: true
            }).then((res) => {
                // setSession(res)
                // console.log(res)
                console.log(res.headers['set-cookie'])
                console.log(res);
                setSession(res);
            })
    }

    const onClick1 = () => {
        setUserType(1);
    }
    const onClick2 = () => {
        setUserType(2);
    }

        return(
            <div className="auth-wrapper" style={{paddingTop: '2em' ,backgroundColor:'white'}}>
                <div className="auth-inner" >    
                    <div>
                        <h3>LOGIN</h3>

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

                        <button type="submit" className="btn btn-primary btn-block" onClick={checkUserType}>Login</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
                {session && <Redirect to="/mypage" /> }
            </div> 
                     
        );
    }

export default Login;
import React,{ useState } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input}from 'reactstrap';
import axios from 'axios';



function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

        return(
            <Form className="login-form">
                {/* <h1>Xestate</h1> */}
                <h2 className= "text-center">WELCOME</h2>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="name"
                           placeholder="name"
                           name = "name"
                           value = {name}
                           onChange={onChangeName}/>
                </FormGroup>
                <FormGroup>
                    <Label>PASSWORD</Label>
                    <Input type="password"
                           placeholder="Password"
                           name = "password"
                           value = {password}
                           onChange={onChangePassword}/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block"
                    onClick={
                        () => {
                        axios({
                            method: 'POST',
                            url: `https://blog.nopublisher.dev/lessee/login`,
                            body: {
                                    name:name,
                                    password: password,
                                    } 
                        }).then(console.log)
                        // console.log(this.state);
                        }
                    }
                    href = '/Home'
                    >
                    Login
                </Button>
                <div className="text-center">
                    <a href="/signup">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">forgot password</a>
                </div>
            </Form>
        );
    }

export default Login;
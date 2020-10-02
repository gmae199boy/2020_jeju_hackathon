import React,{ Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input}from 'reactstrap';
import axios from 'axios';



class Login extends Component {

    state = {
        name: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return(
            <Form className="login-form">
                {/* <h1>Xestate</h1> */}
                <h2 className= "text-center">WELCOME</h2>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="name"
                           placeholder="name"
                           name = "name"
                           value = {this.state.name}
                           onChange={
                            this.handleChange
                            }/>
                </FormGroup>
                <FormGroup>
                    <Label>PASSWORD</Label>
                    <Input type="password"
                           placeholder="Password"
                           name = "password"
                           value = {this.state.password}
                           onChange={
                            this.handleChange
                            }/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block"
                    onClick={
                        () => {
                        axios({
                            method: 'POST',
                            url: `https://blog.nopublisher.dev/lessee/login`,
                            body: {
                                    name:this.state.name,
                                    password: this.state.password,
                                    } 
                        }).then(console.log)
                        console.log(this.state);
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
}

export default Login;
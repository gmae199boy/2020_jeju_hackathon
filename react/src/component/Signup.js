import React,{ Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


class Signup extends Component {

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
                            }
                           />
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
                                
                            fetch(`https://blog.nopublisher.dev/lessee/signup`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({name:this.state.name,password:this.state.password})
                            }).then(res => res.json())
                            .then(json => {
                                window.location.href = 'http://localhost:3000/Home'
                            })
                        }}
                >
                    Signup
                </Button>
                <div className="text-center">
                    <a href="/Login">Login</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">forgot password</a>
                </div>
            </Form>
        );
        
    }
    
}

export default Signup;
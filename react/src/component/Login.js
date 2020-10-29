import React,{ useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './Login.css';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [session, setSession] = useState('');
    // let [color, setColor] = useState({black : true});
    const [state, setState] = React.useState({
        checkedF: false,
        checkedG: false,
    })


    const tempStyle={
        margin : "0 auto",
        marginBottom : "3%",
        marginTop :"100px",
        width:"300px",
        textAlign:"center",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    }

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
      

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
                window.localStorage.setItem('user', JSON.stringify(res.data));
                console.log(res);
                setSession(res);
            })
    }

    // const changeColor =()=> {
    //     let btn_class = setColor.black ? "blackButton" : "whiteButton";

    //    setColor({black: !setColor.black})
    // }


    const onClick1 = (event) => {
        setUserType(1);
        setState({ ...state, [event.target.name]: event.target.checked });
        // changeColor.bind();
    }
    const onClick2 = (event) => {
        setUserType(2);
        setState({ ...state, [event.target.name]: event.target.checked });
        // changeColor.bind();
    }

    // let btn_class = setColor.black ? "blackButton" : "whiteButton";

        return(
            <div >
                <div  >    
                    <div style={tempStyle}>
                        <h3>로그인</h3>
                        <br />
                        <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedF} onChange={onClick1} name="checkedF" />}
                            label="임대인"
                        />
                        {/* <Button
                            // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            // checkedIcon={<CheckBoxIcon fontSize="small" />}
                            
                            name="checkedI"
                            type="submit"
                            onClick={onClick1}
                            label="임대인"
                            // style={{color:active ? 'green': 'blue'}}
                           
                        >임대인</Button> */}
                        <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedG} onChange={onClick2} name="checkedG" />}
                            label="임차인"
                        />
                        {/* <Button
                            // icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            // checkedIcon={<CheckBoxIcon fontSize="small" />}
                           
                            name="checkedI"
                            label="임차인"
                            onClick={onClick2}
                            // style={{color:active ? 'green': 'blue'}}
                        >임차인</Button> */}
                        <br />
                        <br />
                        <div style={{textAlign:"left"}} className="form-group">
                            {/* <label>Email address</label> */}
                            <input type="email" className="form-control" placeholder="이름" onChange={onChangeName}/>
                        </div>

                        <div style={{textAlign:"left"}} className="form-group">
                            {/* <label>Password</label> */}
                            <input type="password" className="form-control" placeholder="비밀번호" onChange={onChangePassword}/>
                        </div>

                        <Button variant="contained" size = "large" type="submit" className="btn btn-primary btn-block" onClick={checkUserType}>로그인</Button>
                        <p className="forgot-password text-right">
                            <a textAlign="center" href="./signup">sign up</a>
                        </p>
                    </div>
                </div>

                {session && <Redirect to="/mypage" /> }

            </div> 
                     
        );
    }

export default Login;
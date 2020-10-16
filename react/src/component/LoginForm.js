// import React, {useState} from 'react';
// import { withRouter } from 'react-router-dom';
// import './Login.css';
// import { Button, Form, FormGroup, Label, Input}from 'reactstrap';
// import axios from 'axios';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

// function LoginForm() {
//     const tempStyle={
//         margin : "0 auto",
//         marginBottom : "3%",
//         width:"300px"
//     }

//   return (
//     <div className="auth-wrapper" style={ {paddingTop: '2em' ,backgroundColor:'white'}}>
//     <div className="auth-inner" >    
//         <div>
//             <h3>LOGIN</h3>

//                     <Checkbox
//                         icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
//                         checkedIcon={<CheckBoxIcon fontSize="small" />}
//                         name="checkedI"
//                         onClick={onClick1}
//                         label="임대인"
//                     /> 임대인
//                     <Checkbox
//                         icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
//                         checkedIcon={<CheckBoxIcon fontSize="small" />}
//                         name="checkedI"
//                         label="임차인"
//                         onClick={onClick2}
//                     /> 임차인

//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input type="email" className="form-control" placeholder="Enter email" onChange={onChangeName}/>
//                     </div>

//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password" className="form-control" placeholder="Enter password" onChange={onChangePassword}/>
//                     </div>

//                     <div className="form-group">
//                         <div className="custom-control custom-checkbox">
//                             <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                         </div>
//                     </div>

//                     <button type="submit" className="btn btn-primary btn-block" onClick={checkUserType}>Login</button>
//                     <p className="forgot-password text-right">
//                         Forgot <a href="#">password?</a>
//                     </p>
//                 </div>
//             </div>
//         </div> 
//   );
// }

// export default LoginForm;
                    
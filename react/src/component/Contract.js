import React, {Component} from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const urlElements = window.location.pathname.split('/');
const id = (urlElements[2]);

class Contract extends Component {

    state = {
        officeOwner : '',
        officeAddress: '',
        officeStructure: '',
        officeAcreage: '',
        lessorName: '',
        lessorSSN: '',
        lessorphoneNumber: '',
        lessorAddress: '',
        lesseeName: '',
        lesseeSSN: '',
        lesseePhoneNumber: '',
        lesseeAddress: '',
        date: '',
        term: '',
    }

    useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },
      }));

      handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // function showPopup(){
    //     this.setState({  
    //         showPopup: !this.state.showPopup  
    //       }); 
    //   }
      render(){
        return (
            <div>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    임대차 계약서
            </Typography>

            <div style={{marginLeft:'4em'}}>
                <form className={this.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            type="text"
                            name = "officeOwner"
                            value ={this.state.officeOwner}
                            onChange={
                                this.handleChange
                            }
                         id="standard-search" label="사무실 소유쥬" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "officeAddress"
                                value ={this.state.officeAddress}
                                onChange={
                                    this.handleChange
                                }
                        required id="standard-required" label="사무실 소재지" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "officeStructure"
                                value ={this.state.officeStructure}
                                onChange={
                                    this.handleChange
                                }
                        required id="standard-required" label="사무실 층 수" type="search" style={{marginLeft:'3em'}} />

                        <FormControl label="사무실 타입" type="search" style={{marginLeft:'-10.5em', marginTop:'4em'}} type = "inline">
                                <Select
                                    // style={{marginTop :'1.7em', marginLeft:'-2em', marginBottom:'-1.5em'}}
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={this.age}
                                    onChange={this.handleChange}
                                    displayEmpty
                                    className={this.selectEmpty}
                                    >
                                    <MenuItem>사무실 타입</MenuItem>
                                    <MenuItem value={1} onClick={()=>this.state.roomType=1}>월세</MenuItem>
                                    <MenuItem value={2} onClick={()=>this.state.roomType=2}>오피스텔</MenuItem>     
                                </Select>
                        </FormControl>
                        <br />
                      
                     

                        <TextField 
                                type="text"
                                name = "lessorName"
                                value ={this.state.lessorName}
                                onChange={
                                    this.handleChange
                                }
                        required id="standard-required" label="임대인 이름" type="search" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorSSN"
                                value ={this.state.lessorSSN}
                                onChange={
                                    this.handleChange
                                }
                        required id="standard-required" label="임대인 주민번호" type="search" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorphoneNumber"
                                value ={this.state.lessorphoneNumber}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임대인 전화번호" type="search" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorAddress"
                                value ={this.state.lessorAddress}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임대인 주소" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeName"
                                value ={this.state.lesseeName}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임차인 이름" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseePhoneNumber"
                                value ={this.state.lesseePhoneNumber}
                                onChange={
                                    this.handleChange
                                }
                        
                                required id="standard-required" label="임차인 전화번호" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeSSN"
                                value ={this.state.lesseeSSN}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임차인 주민번호" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeAddress"
                                value ={this.state.lesseeAddress}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임차인 주소" type="search" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "date"
                                value ={this.state.date}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="계약일" type="search" style={{marginLeft:'3em'}} />                    
                        <TextField 
                                type="text"
                                name = "term"
                                value ={this.state.term}
                                onChange={
                                    this.handleChange
                                }
                                required id="standard-required" label="임대기한" type="search" style={{marginLeft:'3em'}} />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" type="submit" background-color="#6610f2" style = {{marginLeft : '4.5em'}} onClick={
                               async () => {
                                    //FormData 생성
                                    // let fd = new FormData();
                                    // //FormData에 key, value 추가하기
                                    // fd.append('officeOrner', this.state.officeOwner);
                                    // fd.append('officeAddress', this.state.officeAddress);
                                    // fd.append('officeStructure', this.state.officeStructure);
                                    // fd.append('officeAcreage', this.state.officeAcreage);
                                    // fd.append('lessorName', this.state.lessorName);
                                    // fd.append('lessorSSN', this.state.lessorSSN);
                                    // fd.append('lessorphoneNumber', this.state.lessorphoneNumber);
                                    // fd.append('lessorAddress', this.state.lessorAddress);
                                    // fd.append('lesseeName', this.state.lesseeName);
                                    // fd.append('lesseeSSN', this.state.lesseeSSN);
                                    // fd.append('lesseePhoneNumber', this.state.lesseePhoneNumber);
                                    // fd.append('lesseeAddress', this.state.lesseeAddress);
                                    // fd.append('date', this.state.date);
                                    // fd.append('term', this.state.term);
                                    axios({
                                        url: `https://blog.nopublisher.dev/room/contract/${id}`,
                                            method: 'POST',
                                            body: JSON.stringify({
                                                officeOwner: this.state.officeOwner,
                                                officeAddress: this.state.officeAddress,
                                                officeStructure: this.state.officeStructure,
                                                officeAcreage: this.state.officeAcreage,
                                                lessorName: this.state.lessorName,
                                                lessorSSN: this.state.lessorSSN,
                                                lessorphoneNumber: this.state.lessorphoneNumber,
                                                lessorAddress: this.state.lessorAddress,
                                                lesseeName: this.state.lesseeName,
                                                lesseeSSN: this.state.lesseeSSN,
                                                lesseePhoneNumber: this.state.lesseePhoneNumber,
                                                lesseeAddress: this.state.lesseeAddress,
                                                date: this.state.date,
                                                term: this.state.term,
                                            }),
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                        })
                                    // axios({
                                    //     method: 'POST',
                                    //     url: `https://blog.nopublisher.dev/room/contract/${id}`,
                                    //     data: fd,
                                    // })
                                    // console.log(room);
                                }
                            }>계약서 작성</Button> 

                    </div>
                </form>
            </div>
                         
        </div>   
        );
      }
  }

export default Contract;

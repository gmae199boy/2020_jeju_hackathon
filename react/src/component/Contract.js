import React, {useState} from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const urlElements = window.location.pathname.split('/');
const id = (urlElements[2]);

function Contract() {
    let [officeAddress, setOfficeAddress] = useState(null);
    let [officeOwner, setOfficeOwner] = useState(null);
    let [officeStructure, setOfficeStructure] = useState(null);
    let [officeAcreage, setOfficeAcreage]= useState(null);
    let [lessorName , setLessorName] = useState(null);
    let [lessorSSN, setLessorSSN] = useState(null);
    let [lessorphoneNumber, setLessorphoneNumber] = useState(null);
    let [lessorAddress, setlessorAddress] = useState(null);
    let [lesseeName, setLesseeName] = useState(null);
    let [lesseeSSN, setLesseeSSN] = useState(null);
    let [lesseePhoneNumber, setLesseePhoneNumber] = useState(null);
    let [lesseeAddress, setLesseeAddress] = useState(null);
    let [date, setDate] = useState(null);
    let [term, setTerm] = useState(null);

    // function showPopup(){
    //     this.setState({  
    //         showPopup: !this.state.showPopup  
    //       }); 
    //   }
        return (
            <div>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    임대차 계약서
            </Typography>

            <div style={{marginLeft:'4em'}}>
                        <TextField
                            type="text"
                            name = "officeOwner"
                            
                            onChange={
                                setOfficeOwner
                            }
                         id="standard-search" label="사무실 소유쥬" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "officeAddress"
                                value ={officeAddress}
                                onChange={
                                    setOfficeAddress}
                        required id="standard-required" label="사무실 소재지" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "officeStructure"
                                value ={officeStructure}
                                onChange={
                                    setOfficeStructure
                                }
                        required id="standard-required" label="사무실 층 수" style={{marginLeft:'3em'}} />

                        <FormControl label="사무실 타입" style={{marginLeft:'-10.5em', marginTop:'4em'}} type = "inline">
                                <Select
                                    // style={{marginTop :'1.7em', marginLeft:'-2em', marginBottom:'-1.5em'}}
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
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
                                value ={lessorName}
                                onChange={
                                    setLessorName
                                }
                        required id="standard-required" label="임대인 이름" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorSSN"
                                value ={lessorSSN}
                                onChange={
                                    setLessorSSN
                                }
                        required id="standard-required" label="임대인 주민번호" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorphoneNumber"
                                value ={lessorphoneNumber}
                                onChange={
                                    setLessorphoneNumber
                                }
                                required id="standard-required" label="임대인 전화번호" style={{marginLeft:'3em'}} />
                        <TextField
                                type="text"
                                name = "lessorAddress"
                                value ={lessorAddress}
                                onChange={
                                    setlessorAddress
                                }
                                required id="standard-required" label="임대인 주소" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeName"
                                value ={lesseeName}
                                onChange={
                                    setLesseeName
                                }
                                required id="standard-required" label="임차인 이름" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseePhoneNumber"
                                value ={lesseePhoneNumber}
                                onChange={
                                    setLesseePhoneNumber
                                }
                        
                                required id="standard-required" label="임차인 전화번호" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeSSN"
                                value ={lesseeSSN}
                                onChange={
                                    setLesseeSSN
                                }
                                required id="standard-required" label="임차인 주민번호" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "lesseeAddress"
                                value ={lesseeAddress}
                                onChange={
                                    setLesseeAddress
                                }
                                required id="standard-required" label="임차인 주소" style={{marginLeft:'3em'}} />
                        <TextField 
                                type="text"
                                name = "date"
                                value ={date}
                                onChange={
                                    setDate
                                }
                                required id="standard-required" label="계약일" style={{marginLeft:'3em'}} />                    
                        <TextField 
                                type="text"
                                name = "term"
                                value ={term}
                                onChange={
                                    setTerm
                                }
                                required id="standard-required" label="임대기한" style={{marginLeft:'3em'}} />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" type="submit" background-color="#6610f2" style = {{marginLeft : '4.5em'}} onClick={
                               async () => {
                                    axios({
                                        url: `https://blog.nopublisher.dev/room/contract/${id}`,
                                            method: 'POST',
                                            body: JSON.stringify({
                                                "officeOwner": officeOwner,
                                                "officeAddress": officeAddress,
                                                "officeStructure": officeStructure,
                                                "officeAcreage": officeAcreage,
                                                "lessorName": lessorName,
                                                "lessorSSN": lessorSSN,
                                                "lessorphoneNumber": lessorphoneNumber,
                                                "lessorAddress": lessorAddress,
                                                "lesseeName": lesseeName,
                                                "lesseeSSN": lesseeSSN,
                                                "lesseePhoneNumber": lesseePhoneNumber,
                                                "lesseeAddress": lesseeAddress,
                                                "date": date,
                                                "term": term,
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
        </div>   
        );
  }

export default Contract;

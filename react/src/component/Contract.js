import React, {useState} from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Input } from '@material-ui/core';

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

    const tempStyle={
        margin : "0 auto",
        marginBottom : "3%",
        width:"300px"
    }

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

            <div style={tempStyle}>
            <div style={tempStyle}>
                    <Input
                        type="text"
                        name = "officeOwner"
                        placeholder="사무실 소유주"
                        className="form-control"
                        onChange={
                            setOfficeOwner
                        }
                        id="standard-search" placeholder="사무실 소유쥬"  />
            </div>
            <div style={tempStyle}>
                        <input 
                                type="text"
                                name = "officeAddress"
                                className="form-control"
                                value ={officeAddress}
                                onChange={
                                    setOfficeAddress}
                        required id="standard-required" placeholder="사무실 소재지" />
            </div>           
            <div style={tempStyle}> 
                        <input 
                                type="text"
                                name = "officeStructure"
                                className="form-control"
                                value ={officeStructure}
                                onChange={
                                    setOfficeStructure
                                }
                        required id="standard-required" placeholder="사무실 층 수"  />

            </div>          

                        <div style={tempStyle}>
                          
                            <div>
                                <select className="browser-default custom-select" onChange={officeAcreage}>
                                <option>방 종류를 입력하세요</option>
                                <option value="1">월세</option>
                                <option value="2">오피스텔</option>
                            </select>
                        </div>
                        </div>
                        {/* <FormControl placeholder="사무실 타입" style={{marginLeft:'-10.5em', marginTop:'4em'}} type = "inline">
                                <Select
                                    // style={{marginTop :'1.7em', marginLeft:'-2em', marginBottom:'-1.5em'}}
                                    placeholderId="demo-simple-select-placeholder-placeholder-placeholder"
                                    id="demo-simple-select-placeholder-placeholder"
                                    onChange={handleChange}
                                    displayEmpty
                                    className={selectEmpty}
                                    >
                                    <MenuItem>사무실 타입</MenuItem>
                                    <MenuItem value={1} onClick={()=>this.state.roomType=1}>월세</MenuItem>
                                    <MenuItem value={2} onClick={()=>this.state.roomType=2}>오피스텔</MenuItem>     
                                </Select>
                        </FormControl>
                        <br /> */}
                      
                     
                    <div style={tempStyle}>
                        <input 
                                type="text"
                                name = "lessorName"
                                className="form-control"
                                value ={lessorName}
                                onChange={
                                    setLessorName
                                }
                        required id="standard-required" placeholder="임대인 이름"  />
</div>
                    <div style={tempStyle}>
                        <input
                                type="text"
                                name = "lessorSSN"
                                className="form-control"
                                value ={lessorSSN}
                                onChange={
                                    setLessorSSN
                                }
                        required id="standard-required" placeholder="임대인 주민번호"  />
</div>
<div style={tempStyle}>
                        <input
                                type="text"
                                name = "lessorphoneNumber"
                                className="form-control"
                                value ={lessorphoneNumber}
                                onChange={
                                    setLessorphoneNumber
                                }
                                required id="standard-required" placeholder="임대인 전화번호"  />
</div>
                    <div style={tempStyle}>   
                        <input
                                type="text"
                                name = "lessorAddress"
                                className="form-control"
                                value ={lessorAddress}
                                onChange={
                                    setlessorAddress
                                }
                                required id="standard-required" placeholder="임대인 주소"  />
</div>
<div style={tempStyle}>
                    
                        <input 
                                type="text"
                                name = "lesseeName"
                                className="form-control"
                                value ={lesseeName}
                                onChange={
                                    setLesseeName
                                }
                                required id="standard-required" placeholder="임차인 이름"  />
</div>                                

                     <div style={tempStyle}>   
                        <input 
                                type="text"
                                name = "lesseePhoneNumber"
                                className="form-control"
                                value ={lesseePhoneNumber}
                                onChange={
                                    setLesseePhoneNumber
                                }
                        
                                required id="standard-required" placeholder="임차인 전화번호"  />
</div>
                    <div style={tempStyle}>    
                        <input 
                                type="text"
                                name = "lesseeSSN"
                                className="form-control"
                                value ={lesseeSSN}
                                onChange={
                                    setLesseeSSN
                                }
                                required id="standard-required" placeholder="임차인 주민번호"  />
</div>
                    <div style={tempStyle}>    
                        <input 
                                type="text"
                                name = "lesseeAddress"
                                className="form-control"
                                value ={lesseeAddress}
                                onChange={
                                    setLesseeAddress
                                }
                                required id="standard-required" placeholder="임차인 주소"  />
</div>
                    <div style={tempStyle}>    
                        <input 
                                type="text"
                                name = "date"
                                className="form-control"
                                value ={date}
                                onChange={
                                    setDate
                                }
                                required id="standard-required" placeholder="계약일"  />         
</div>
                    <div style={tempStyle}>               
                        <input 
                                type="text"
                                name = "term"
                                className="form-control"
                                value ={term}
                                onChange={
                                    setTerm
                                }
                                required id="standard-required" placeholder="임대기한"  />

</div>

                        <br />
                        <Button variant="contained" type="submit" background-color="#6610f2" style = {tempStyle} onClick={
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

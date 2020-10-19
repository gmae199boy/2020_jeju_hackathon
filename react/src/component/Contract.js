import React, {useState, useEffect} from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import { Input } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


const urlElements = window.location.pathname.split('/');
const id = (urlElements[2]);

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function Contract() {
    const classes = useStyles();
    const [officeAddress, setOfficeAddress] = useState(null);
    const [officeOwner, setOfficeOwner] = useState(null);
    const [officeStructure, setOfficeStructure] = useState(null);
    const [officeAcreage, setOfficeAcreage]= useState(null);
    const [lessorName , setLessorName] = useState(null);
    const [lessorSSN, setLessorSSN] = useState(null);
    const [lessorphoneNumber, setLessorphoneNumber] = useState(null);
    const [lessorAddress, setlessorAddress] = useState(null);
    const [lesseeName, setLesseeName] = useState(null);
    const [lesseeSSN, setLesseeSSN] = useState(null);
    const [lesseePhoneNumber, setLesseePhoneNumber] = useState(null);
    const [lesseeAddress, setLesseeAddress] = useState(null);
    const [date, setDate] = useState(null);
    const [term, setTerm] = useState(null);
    const [user, setUser] = useState(null);
    const [room, setRoom] = useState(null);

    const getRoom = async () => {
        await axios.get(`https://blog.nopublisher.dev/room/${id}`,
            {
              headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
              }
            }
          ).then((res) => {
            setRoom(res.data);
            console.log(res.data);
          },[])
      };
      useEffect (async () => {
        const userParse = JSON.parse(window.localStorage.getItem('user'));
        setUser(userParse);
        getRoom();
        console.log(userParse)
      },[]);

    const tempStyle={
        margin : "0 auto",
        marginBottom : "3%",
        width:"300px",
        marginLeft:'2em'
    }
    
    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        style: { marginLeft: '1.5em', width: '330px', height: '8rem' },
      }
    // function showPopup(){
    //     this.setState({  
    //         showPopup: !this.state.showPopup  
    //       }); 
    //   }

    const onChangeAddress = e => {
        setAddress(e.target.value);
    }

    const onChangePhoneNumber = e => {
        setPhoneNumber(e.target.value);
    }

    const onChangeSSN = e => {
        setSSN(e.target.value);
    }
    const onChangeDate = e => {
        setDate(e.target.value);
    }
        return (
            <div>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                    임대차 계약서
            </Typography>
            <br />
            <div>
                <Box borderRadius={16} borderColor="grey.500" {...defaultProps}>
                    <div style={{textAlign:'left', fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                        사무실 소유주 : {room && room.name}
                    </div> 
                    
                    <div style={{textAlign:'left', fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                        사무실 소재지 : {room && room.address}
                    </div>
                    {/* {user.data.address} */}
                    <div style={{textAlign:'left', fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                        사무실 구조 : {room && room.structure} 층
                    </div>
                    <div style={{textAlign:'left', fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                        사무실 평수 : {room && room.acreage} m^2
                    </div>
                </Box>
                <br />

                <div style={{textAlign:'left' ,marginLeft:'1.5em'}}>
                    계약 당사자 본인 인증
                </div>              
                <Box borderRadius={16} borderColor="grey.500" {...defaultProps}>
                    {user && user.userType === 1 ? <div textAlign="center" style={{ textAlign:'center',fontWeight:'bold',  fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                        <bold>임대인</bold></div>
                     : <div style={{textAlign:'center',fontWeight:'bold', fontSize: '0.8rem', marginTop: '1em', marginLeft:'1em'}}>
                        임차인
                    </div>}  
                    <div style={{textAlign:'left', fontSize: '0.8rem', marginTop: '0.5em', marginLeft:'1em'}}>
                            전화번호 : <Input style={{marginTop:'-0.5rem', marginBottom:'0.3rem',marginLeft: '0.3rem', fontSize:'0.8rem'}} placeholder="입력하세요" inputProps={{ 'aria-label': 'description' }} onChange={onChangePhoneNumber}/>
                    <br/>    주소 : <Input style={{marginTop:'-0.5rem', marginBottom:'0.3rem',marginLeft: '1.7rem', fontSize:'0.8rem'}} placeholder="입력하세요" inputProps={{ 'aria-label': 'description' }} onChange={onChangePhoneNumber}/>
                    <br/>    주민번호 : <Input style={{marginTop:'-0.5rem', marginBottom:'0.3rem',marginLeft: '0.3rem', fontSize:'0.8rem'}} placeholder="입력하세요" inputProps={{ 'aria-label': 'description' }} onChange={onChangeSSN} />
                    </div>
                    
                </Box>
                <br />
                
                <div style={{textAlign:'left' ,marginLeft:'1.5em'}}>
                    계약 내용
                </div>
                <Box borderRadius={16} borderColor="grey.500" {...defaultProps}>
                     <div style={{float:'left', textAlign:'left', fontSize: '0.8rem', marginTop: '2em', marginLeft:'1.9em'}}>
                        계약일
                    </div>
                    <div style={{float:'left', marginTop: '1em', marginLeft:'1em'}}>
                        <form className={classes.container} noValidate>
                                <TextField  
                                    id="date"
                                    type="date"
                                    defaultValue="2020-10-19"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </form>
                    </div>
                    
                    <div style={{float:'left', textAlign:'left', fontSize: '0.8rem', marginTop: '2em', marginLeft:'1em'}}>
                        임대기한
                    </div>
                    <div style={{float:'left', marginTop: '1em', marginLeft:'1em'}}>
                        <form className={classes.container} noValidate>
                                <TextField  
                                    id="date"
                                    type="date"
                                    defaultValue="2020-10-19"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    onChange={onChangeDate}
                                />
                            </form>
                    </div>
                </Box>
                <div style={{textAlign:'left', fontSize: '0.6rem', marginTop: '0.5em', marginLeft:'5em'}}>
                        위 사무실 소유 물건 및 그 정착물, 부속물 모두 {}부터 본인의 임차합니다. <br/>
                        따라서 아래 조항을 굳게 지켜 추호도 위배글이 없을 것을 확인합니다.
                </div>
            {/* <div style={tempStyle}>
                    <input
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
                      
                     
                    {/* <div style={tempStyle}>
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

                        <br /> */}
                         <br />
                        <Button style={tempStyle} variant="contained" size="large" type="submit" background-color="#6610f2" onClick={
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
                            }>동의 및 제출</Button> 

                    </div>   
        </div>   
        );
  }

export default Contract;

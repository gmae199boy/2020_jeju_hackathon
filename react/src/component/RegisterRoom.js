import React , {useState, Component, onClick} from 'react';
import './RegisterRoom.css';
import { Form, Col} from "react-bootstrap";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class RegisterRoom extends Component{
//방 id도 다 넘겨주기
    classes = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    // classes = useStyles();
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    state = {
        isLoading: true,
        name: '',
        roomType: '',
        address: '',
        state: '',
        monthlyPayment: '',
        images : '',
        content: '',
    }
    
    isSelectedImg = (e) => {
        this.state.images = e.target.files[0];
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onCreate(this.state);
    //     this.setState({
    //         name: '',
    //         roomType: '',
    //         address: '',
    //         state: '',
    //         monthlyPayment: '',
    //         images : '',
    //         content: '',
    //     })
    // }
    //   getRooms = async () => {
    //     const rooms = await axios.get("/room/create");
    //     console.log(rooms);
    //     this.setState({ rooms , isLoading: false });
    //   };
    //   componentDidMount(){
    //     this.getRooms();
    //   }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                    방 등록
                </Typography>
                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>이름</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "name"
                                placeholder = "이름을 입력하세요"
                                value ={this.state.name}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>주소</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "address"
                                placeholder = "주소를 입력하세요"
                                value ={this.state.address}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="roomType" sm="5">
                        <Form.Label>방 종류</Form.Label>

                        <FormControl className={this.classes.formControl}>
                            <Select
                            style={{marginTop :'1.7em', marginLeft:'-2em', marginBottom:'-1.5em'}}
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={this.age}
                            onChange={this.handleChange}
                            displayEmpty
                            className={this.classes.selectEmpty}
                            >
                            <MenuItem>선택하세요</MenuItem>
                            <MenuItem value={1} onClick={()=>this.state.roomType=1}>월세</MenuItem>
                            <MenuItem value={2} onClick={()=>this.state.roomType=2}>오피스텔</MenuItem>     
                            </Select>
                            <FormHelperText> </FormHelperText>
                        </FormControl>

                        {/* <DropdownButton id="dropdown-basic-button" title="선택하세요">
                            <Dropdown.Item value="원룸"
                                            onClick={()=>{this.state.roomType=1;
                                            }}>
                                            원룸</Dropdown.Item>
                            <Dropdown.Item onClick={()=>this.state.roomType=2}>오피스텔</Dropdown.Item>
                        
                        <FormControl 
                                type="text"
                                name = "roomType"
                                placeholder = "방 종류를 입력하세요"
                                value ={this.state.roomType}
                                onChange={
                                    this.handleChange
                                }
                            />
                        </DropdownButton> */}
                    </Form.Group>

                    <Form.Group as={Col} controlId="monthlyPayment" sm="5">
                        <Form.Label>월세</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "monthlyPayment"
                                placeholder = "월세를 입력하세요"
                                value ={this.state.monthlyPayment}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="monthlyPayment" sm="5">
                        <Form.Label>사진 첨부</Form.Label>
                    <div style={{marginLeft : '0.4rem'}}>
                        <Input
                            type="file"
                            accept="image/jpeg, image/jpg, image/png "  //업로드 가능한 파일 종류. 
                            onChange={this.isSelectedImg} />
                    </div>
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="content" sm="3" form-control={{width:'60'}}>
                        <Form.Label>계약서 작성</Form.Label>
                        <br />
                        <Button variant="outlined"
                                onClick={
                                    () => {
                                    axios({
                                        method: 'POST',
                                        url: `https://blog.nopublisher.dev/room/contract/`
                                    })
                                    }
                                } >작성하기</Button>
                        
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="content" sm="5">
                        <Form.Label>설명</Form.Label>
                            <Form.Control 
                                    type="text"
                                    name = "content"
                                    placeholder = "방에 대한 추가 설명 입력하세요"
                                    value ={this.state.content}
                                    onChange={
                                        this.handleChange
                                    }
                                />
                    </Form.Group>

                    
                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            {/* <div>
                            '계약서 작성페이지로 이동합니다'
                            </div><br />                          */}
                           <Button variant="contained" color="primary" type="submit" background-color="#6610f2" style = {{marginLeft : '5em'}} onClick={
                                    async () => {
                                    console.log(this.state);
                                                //FormData 생성
                                    let fd = new FormData();
                                    //FormData에 key, value 추가하기
                                    fd.append('images', this.state.images);
                                    fd.append('name', this.state.name);
                                    fd.append('roomType', this.state.roomType);
                                    fd.append('monthlyPayment', this.state.monthlyPayment);
                                    fd.append('address', this.state.address);
                                    fd.append('state', this.state.state);
                                    fd.append('content', this.state.content);
                                    const room = await axios({
                                        method: 'POST',
                                        url: 'https://blog.nopublisher.dev/room/create',
                                        data: fd,
                                    })
                                    window.location.href = `http://localhost:3000/SearchRoom`
                                    // .then(res=> {
                                    //     window.location.href = `/contract/${res.id}`
                                        
                                    // })
                                }
                            }
                                >등록</Button>         
                        </Grid>
                    </Grid>
                        
            </div>
            </form>
                               
        );
    }
}
export default RegisterRoom;
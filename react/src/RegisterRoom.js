import React , {useState, Component, onClick} from 'react';
import './RegisterRoom.css';
import { Form, Col, Button} from "react-bootstrap";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class RegisterRoom extends Component{
    state = {
        isLoading: true,
        name: '',
        roomType: '',
        address: '',
        state: '',
        deposit: '',
        monthlyPay: '',

      };
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
                <div>
                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>이름</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "name"
                                placeholder = "이름을 입력하세요"
                                value ={this.state.name}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            name: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>주소</Form.Label>
                        <Form.Control 
                                type="text"
                                address = "address"
                                placeholder = "주소를 입력하세요"
                                value ={this.state.address}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            address: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="roomType" sm="5">
                        <Form.Label>방 종류</Form.Label>
                        <Form.Control 
                                type="text"
                                roomType = "roomType"
                                placeholder = "방 종류를 입력하세요"
                                value ={this.state.roomType}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            roomType: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="state" sm="5">
                        <Form.Label>상태</Form.Label>
                        <Form.Control 
                                type="text"
                                state = "state"
                                placeholder = "상태를 입력하세요"
                                value ={this.state.state}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            state: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="deposit" sm="5">
                        <Form.Label>보증금</Form.Label>
                        <Form.Control 
                                type="text"
                                deposit = "deposit"
                                placeholder = "보증금을 입력하세요"
                                value ={this.state.deposit}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            deposit: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="monthlyPay" sm="5">
                        <Form.Label>월세</Form.Label>
                        <Form.Control 
                                type="text"
                                monthlyPay = "monthlyPay"
                                placeholder = "월세를 입력하세요"
                                value ={this.state.monthlyPay}
                                onChange={
                                    (e) => {
                                        this.setState({
                                            monthlyPay: e.target.value
                                        })
                                    }
                                }
                            />
                    </Form.Group>
                    <Grid container spacing={1} justify="center">
                                 <Grid item>
                                 <Button background-color="#6610f2" onClick={
                                         () => {
                                             axios.post('https://localhost:8080/room/create')
                                             .then(function (response) {
                                                 console.log(response);
                                             })
                                         }
                                     }>등록</Button>         
                                 </Grid>
                    </Grid>
                        
            </div>               
        );
    }
}
// // const RegisterRoom = () => {

// //     const [name, setName] = useState("");
// //     const [roomType, setRoomType] = useState(0);
// //     const [address, setAddress] = useState("");
// //     const [state, setProgress] = useState(0);
// //     const [deposit, setDeposit] = useState(0);
// //     const [monthlyPayment, setMonthlyPayment] = useState(0);

// //     const onChange = async() => {
// //         let body = {
// //                 name: name,
// //                 roomType : roomType,
// //                 address : address,
// //                 state : state,
// //                 deposit: deposit,
// //                 monthlyPayment: monthlyPayment,
// //         }
// //         let body_json = JSON.stringify(body);
// //         axios({
// //             method: 'POST',
// //             url: 'https://blog.nopublisher.dev/room/create',
// //             body: body_json,
// //         })
// //         // .then(function (response) {console.log(response);})
// //         // .catch(error => {console.log('error : ',error.response)});
// //         console.log(body_json);
// //     }

//     // useEffect(() => {
        
//     // }, [name, roomType, address, progress]);

//     // pressed = function() {
//     //     fetch("https://blog.nopublisher.dev/room/create", {
//     //         method: 'POST',
//     //         headers: {
//     //             Accept: 'application/json',
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify({
//     //             name: name,
//     //             roomType: roomType,
//     //             address: address,
//     //             progress: progress,
//     //         }),
//     //     });
//     // }

//         return(
//             <Form>
//                     <br/><br/>
//                         <Form.Group as={Col} controlId="name" sm="5">
//                         <Form.Label>이름</Form.Label>
//                         <Form.Control 
//                             type="string"
//                             placeholder="이름을 입력하시오"
//                             value = {this.state.RegisterRoom.name}
//                             onChange={
//                                 (e) => {
//                                     this.setState({
//                                         name: e.target.value
//                                     })
//                                 }
//                             }
//                         />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="state" sm="5">
//                         <Form.Label>roomType</Form.Label>
//                         <Form.Control type="number" placeholder="0 또는 1 입력" /> 
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="address" sm="5">
//                         <Form.Label>Address</Form.Label>
//                         <Form.Control type="string" placeholder="주소를 입력하시오" />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="state" sm="5">
//                         <Form.Label>state</Form.Label>
//                         <Form.Control type="number" placeholder="0 또는 1 입력"  />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="deposit" sm="5">
//                         <Form.Label>보증금</Form.Label>
//                         <Form.Control type="number" placeholder="금액을 입력하시오"/>
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="monthly payment" sm="5">
//                         <Form.Label>월세</Form.Label>
//                         <Form.Control type="number" placeholder="금액을 입력하시오" />
//                         </Form.Group>

//                         <Button onClick = {onClick} variant="primary">
//                             Submit
//                         </Button>
//             </Form>
//         )
//     }


export default RegisterRoom;
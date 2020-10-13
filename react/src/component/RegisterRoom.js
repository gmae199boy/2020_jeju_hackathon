import React , {useEffect, useState} from 'react';
import './RegisterRoom.css';
import {Col} from "react-bootstrap";
import axios from 'axios';
import { Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// 주소검색 컴포넌트
// import Postcode from './PostcodeSearch';
import KakaoMap from './KakaoMap';


// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

// const classes = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

function RegisterRoom(){

    const [isLoading, setIsLoading]  = useState('');
    let [name, setName] = useState('');
    let [roomType, setRoomType] = useState('');
    let [state, setState] = useState('');
    let [monthlyPayment, setMonthlyPayment] = useState('');
    let [images, setImages]  = useState('');
    let [content, setContent] = useState('');

    // 카카오 주소검색 한 값
    const [mapView, setMapView] = useState(null);
    const [address, setAddress] = useState(null);
    const [detailAddress, setDetailAddress] = useState(null);
    const [coords, setCoords] = useState({});

    const onChangeImg = (e) => {
        setImages(e.target.files[0]);
    };

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeRoomType = e => {
        setRoomType(e.target.value);
    }

    const onChangeDetailAddress = e => {
        setDetailAddress(e.target.value);
    }

    const onChangeState = e => {
        setState(e.target.value);
    }
    const onChangeMonthlyPayment = e => {
        setMonthlyPayment(e.target.value);
    }
    const onChangeContent = e => {
        setContent(e.target.value);
    }

    const onClick1 = () => {
        setRoomType(roomType == 1);
    }
    const onClick2 = () => {
        setRoomType(roomType == 2);
    }

    const onClick = async () => {
        const formData = new FormData();
        formData.append('images', images);
        formData.append('name', name);
        formData.append('roomType', roomType);
        formData.append('monthlyPayment', monthlyPayment);
        formData.append('address', address);
        formData.append('state', state);
        formData.append('content', content);
        formData.append('coords', coords);
        const rooms = await axios({
            method : 'POST',
            url : 'https://blog.nopublisher.dev/room/create',
            data : formData,
            headers: {
                'Content-Type' : 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
            }
        }).then((res) => {
            console.log(res);
        })
        // const res = await axios.post("https://blog.nopublisher.dev/room/create", formData);
        console.log(rooms);

        // window.location.href = `http://localhost:3000/SearchRoom`    

    }

    // 카카오 주소검색 창 팝업
    const showPostcodeSearchBar = (data) => {
        const {daum} = window;

        //주소-좌표 변환 객체를 생성
        var geocoder = new daum.maps.services.Geocoder();

        new daum.Postcode({
            oncomplete: function(data) {
                setAddress(data.address);
                // var addr = data.address; // 최종 주소 변수

                // 주소 정보를 해당 필드에 넣는다.
                // document.getElementById("sample5_address").value = addr;
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {

                        var result = results[0]; //첫번째 결과의 값을 활용

                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x);

                        setMapView(<KakaoMap coords={coords}></KakaoMap>);
                    }
                });
            }
        }).open();
    }

    const changeAddress = () => {
        setAddress(address + " " + detailAddress);
    }

    return (
        <div>
            <div>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                방 등록
            </Typography>
                <div as={Col} controlId="name" sm="5">
                    <label>이름</label>
                    <input
                            type="text"
                            name = "name"
                            placeholder = "이름을 입력하세요"
                            value ={name}
                            onChange={
                                onChangeName
                            }
                        />
                </div>



                {/* 주소 검색과 검색했을 때 카카오맵 표시 */ }
                <div>
                    <Button variant="outlined" onClick={showPostcodeSearchBar}>주소 검색</Button>
                    <br />
                    {address && address}
                    <br />
                    {address ? 
                        <Input placeholder="상세 주소를 입력하세요" onChange={onChangeDetailAddress}></Input>
                        : null}
                    {address ? 
                        <Button onClick={changeAddress}>확인</Button>
                        : null}
                    {mapView && mapView}
                </div>


                
                {/* <div as={Col} controlId="name" sm="5">
                    <label>주소</label>
                    <input
                            type="text"
                            name = "address"
                            placeholder = "주소를 입력하세요"
                            value ={address}
                            onChange={
                                onChangeAddress
                            }
                        />
                </div> */}

                <div as={Col} controlId="roomType" sm="5">
                    <label>방 종류</label>

                    <div>
                        <input
                            type="text"
                            name = "roomType"
                            placeholder = "방종류를 입력하세요"
                            value ={roomType}
                            onChange={
                                onChangeRoomType
                            }
                        />
                        {/* <Select
                        style={{marginTop :'1.7em', marginLeft:'-2em', marginBottom:'-1.5em'}}
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={roomType}
                        onChange={onChangeRoomType}
                        displayEmpty
                        className={classes.selectEmpty}
                        >
                        <option value="1" onClick={onClick1}>월세</option>
                        <option value="2" onClick={onClick2}>오피스텔</option>
                        </Select> */}
                        
                    </div>
                </div>

                <div as={Col} controlId="monthlyPayment" sm="5">
                    <label>월세</label>
                    <input
                            type="text"
                            name = "monthlyPayment"
                            placeholder = "월세를 입력하세요"
                            value ={monthlyPayment}
                            onChange={onChangeMonthlyPayment}
                            
                        />
                        
                </div>
                <div as={Col} controlId="img" sm="5">
                    <label>사진 첨부</label>
                <div style={{marginLeft : '0.4rem'}}>
                    <Input
                        name="images"
                        type="file"
                        accept="image/* "  //업로드 가능한 파일 종류. 
                        onChange={onChangeImg} />
                </div>
                </div>

                {/* <input as={Col} controlId="content" sm="3" form-control={{width:'60'}}>
                    <label>계약서 작성</label>
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
                    
                </input> */}

                <div as={Col} controlId="content" sm="5">
                    <label>설명</label>
                        <input
                                type="text"
                                name = "content"
                                placeholder = "방에 대한 추가 설명 입력하세요"
                                value ={content}
                                onChange={
                                    onChangeContent
                                }
                            />
                </div>

                
                <div container spacing={1} justify="center">
                    <div item>
                        {/* <div>
                        '계약서 작성페이지로 이동합니다'
                        </div><br />                          */}
                        <Button variant="contained" color="primary" background-color="#6610f2" style = {{marginLeft : '5em'}}
                                onClick={onClick
                                    //  async () => {
                                    // let fd = new FormData();
                                    // //FormData에 key, value 추가하기
                                    // fd.append('name', name);
                                    // fd.append('roomType', roomType);
                                    // fd.append('monthlyPayment', monthlyPayment);
                                    // fd.append('address', address);
                                    // fd.append('state', state);
                                    // fd.append('content', content);
                                    // fd.append('images', images);
                                    // console.log(images);
                                    // const rooms = await axios({
                                    //     method: 'POST',
                                    //     url: 'https://blog.nopublisher.dev/room/create',
                                    //     data: fd,
                                    // })
                                    
                                    // }
                                }  
                        >등록</Button>         
                    </div>
                </div>
        </div>
        </div>
    );
}

export default RegisterRoom;
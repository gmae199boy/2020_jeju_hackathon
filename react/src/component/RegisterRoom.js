import React , {useState} from 'react';
import './RegisterRoom.css';
import axios from 'axios';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// 주소검색 컴포넌트
// import Postcode from './PostcodeSearch';
import KakaoMap from './KakaoMap';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '60',
  },
  
}));

function RegisterRoom(){
    const [rooms, setRooms] = useState('');
    const [name, setName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [state, setState] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [images, setImages]  = useState('');
    const [content, setContent] = useState('');
    const [officeStructure, setOfficeStructure] = useState('');
    const [officeAcreage, setOfficeAcreage]= useState('');

    // 카카오 주소검색 한 값
    const [mapView, setMapView] = useState(null);
    const [address, setAddress] = useState(null);
    const [detailAddress, setDetailAddress] = useState(null);
    const [coordsx, setCoordsx] = useState(null);
    const [coordsy, setCoordsy] = useState(null);

    const tempStyle={
        margin : "0 auto",
        marginBottom : "3%",
        width:"300px"
    }
    const tempStyle1={
        margin : "0 auto",
        marginBottom : "1%",
        width:"300px"
    }

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
    const onChangeOfficeAcreage = e => {
        setOfficeAcreage(e.target.value);
    }
    const onChangeOfficeStructure = e => {   
        setOfficeStructure(e.target.value);
    }

    const onClick = async () => {
        let userId = JSON.parse(window.localStorage.getItem('user'))._id;
        const formData = new FormData();
        formData.append('images', images);
        formData.append('name', name);
        formData.append('roomType', roomType);
        formData.append('monthlyPayment', monthlyPayment);
        formData.append('address', address);
        formData.append('state', state);
        formData.append('content', content);
        formData.append('structure', officeStructure);
        formData.append('acreage', officeAcreage);

        //유저 ObjectId
        formData.append('registLessor', userId);
        // 지도에 마커를 표시할 좌표 x, y
        formData.append('coordsx', coordsx);
        formData.append('coordsy', coordsy);
        await axios({
            method : 'POST',
            url : 'https://blog.nopublisher.dev/room/create',
            data : formData,
            headers: {
                'Content-Type' : 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
            }
        }).then((res) => {
            setRooms(res)
            console.log(res);
        });
        console.log(rooms);
    }

    // 카카오 주소검색 창 팝업
    const showPostcodeSearchBar = (data) => {
        const {daum} = window;

        //주소-좌표 변환 객체를 생성
        var geocoder = new daum.maps.services.Geocoder();

        new daum.Postcode({
            oncomplete: function(data) {
                setAddress(data.address);
                
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {

                        var result = results[0]; //첫번째 결과의 값을 활용

                        setCoordsx(result.x);
                        setCoordsy(result.y);

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
            <div style={{marginTop:'3%'}}>
            {/* <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                방 등록
            </Typography> */}
            <div style={tempStyle}>
                <label>이름</label>            
                    <input
                      type="text"
                      name = "name"
                      placeholder = "이름을 입력하세요"
                      value ={name}
                      className="form-control"
                      id="formGroupExampleInput"
                      onChange={
                          onChangeName
                      }
                    />
            </div>
            {/* 주소 검색과 검색했을 때 카카오맵 표시 */ }
            <div style={tempStyle1}>
                <label style={{marginRight:"5%"}}>주소</label> 
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

            <div style={tempStyle}>
                <label>방 종류</label>
                <div>
                    <select className="browser-default custom-select" onChange={onChangeRoomType}>
                    <option>방 종류를 입력하세요</option>
                    <option value="1">원룸</option>
                    <option value="2">오피스텔</option>
                </select>
                </div>
                <div>
                    {/* <input
                        type="text"
                        name = "roomType"
                        placeholder = "방 종류를 입력하세요"
                        className="form-control"
                        id="formGroupExampleInput"
                        value ={roomType}
                        onChange={
                            onChangeRoomType
                        }
                    /> */}
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

            <div style={tempStyle}>
                <label>월세</label>
                <Input
                        type="text"
                        name = "monthlyPayment"
                        placeholder = "월세를 입력하세요"
                        value ={monthlyPayment}
                        className="form-control"
                        id="formGroupExampleInput"
                        onChange={onChangeMonthlyPayment}
                        
                    />
                    
            </div>
                <div style={tempStyle}>
                    
                    <Input
                        name="images"
                        type="file"
                        accept="image/* "  //업로드 가능한 파일 종류. 
                        onChange={onChangeImg} />
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

                <div style={tempStyle}>
                    <label>설명</label>
                        <input
                                type="text"
                                name = "content"
                                placeholder = "방에 대한 추가 설명 입력하세요"
                                value ={content}
                                className="form-control"
                                id="formGroupExampleInput"
                                onChange={
                                    onChangeContent
                                }
                            />
                </div>
                <div style={tempStyle}>
                    <label>구조</label>
                        <input
                                type="text"
                                name = ""
                                placeholder = "방 구조를 입력하세요"
                                value ={officeStructure}
                                className="form-control"
                                id="formGroupExampleInput"
                                onChange={
                                    onChangeOfficeStructure
                                }
                            />
                </div>
                <div style={tempStyle}>
                    <label>평수</label>
                        <input
                                type="text"
                                name = "content"
                                placeholder = "방 평수를 입력하세요"
                                value ={officeAcreage}
                                className="form-control"
                                id="formGroupExampleInput"
                                onChange={
                                    onChangeOfficeAcreage
                                }
                            />
                </div>
                <div container spacing={1} justify="center">
                    <div style={tempStyle}> 
                        <Button variant="contained" color="green" background-color="#03AE43" style={tempStyle}
                                onClick={onClick}  
                        >등록</Button>         
                    </div>
                </div>
            </div>
            {rooms && <Redirect to="/mypage" /> }
        </div>
    );
}

export default RegisterRoom;
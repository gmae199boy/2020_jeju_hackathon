/**
 * created by gmae199boy
 */
import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import KakaoMap from './KakaoMap';
 
function Postcode () {

    const [mapView, setMapView] = useState(null);
    const [address, setAddress] = useState(null);
    
    const handleComplete = (data) => {
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

    return (
        <div>
            <Button variant="outlined" onClick={handleComplete}>주소 검색</Button>
            <br />
            {address && address}
            {mapView && mapView}
            {/* <DaumPostcode
            onComplete={handleComplete}
            />
            <KakaoMap></KakaoMap> */}
        </div>
    );
}

export default Postcode;
/**
 * created by gmae199boy
 */
import React, {useEffect} from "react";
import axios from 'axios';

function KakaoMap({coordsx, coordsy}) {
    
    useEffect(async () => {
        const { daum } = window;
        const coords = new daum.maps.LatLng(coordsy, coordsx);
        const mapContainer = document.getElementById('map');

		const options = {
			center: coords,//new daum.maps.LatLng(x, y),
            level: 5,
            zIndex: '1',
		};
        const map = new daum.maps.Map(mapContainer, options);

        //마커를 미리 생성
        let marker = new daum.maps.Marker({
            position: coords,//new daum.maps.LatLng(x, y),
            map: map
        });

        // 지도를 보여준다.
        mapContainer.style.display = "block";
        map.relayout();
        // 지도 중심을 변경한다.
        map.setCenter(coords);
        // 마커를 결과값으로 받은 위치로 옮긴다.
        marker.setPosition(coords);
    }, []);
    return(
        <div id="map" style={{width: '300px', height: '200px',zIndex: '4'}}></div>
    );
}

export default KakaoMap;
import fetch from 'node-fetch';

// const KAKAOAK = process.env.KAKAO_AK;

const roomInfoCall = async (req, res) => {
    try {
        // const KakaoURL = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?input_coord=WGS84&output_coord=WGS84&x=${room.coordsx}&y=${room.coordsy}`;
        // const KakaoFetchdata = await fetch(KakaoURL, {
        //     headers:{
        //         Authorization: `KakaoAK ${KAKAOAK}`,
        //     }
        // });
        // const kakaoData = await KakaoFetchdata.json();

        // console.log(kakaoData.documents[0]);

        // const CODE = kakaoData.documents[0].code.substr(0, 5);
        // console.log(CODE);
        const code = req.params.code.substr(0, 5);
        let mm = req.params.mm;

        if(mm.length != 2) {
            mm = '0'+mm;
        }

        const API_URL = "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?";
        const region = `LAWD_CD=${code}&`;
        const YYYYMM = `DEAL_YMD=${req.params.yy+mm}&`;
        const toJson = "_type=json&";
        const serviceKey = `ServiceKey=${process.env.SERVICE_KEY}`;
        const URL = API_URL + region + YYYYMM + toJson + serviceKey;

        const data = await fetch( URL, {
            method: 'GET',
        });
        const parsingData = await data.json();

        console.log(parsingData);

        return parsingData.response.body.items.item;

    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    roomInfoCall,
};
import request from 'request';

const payment = async (req, res) => {
    // 카카오API를 불러오기 위한 준비
    var headers = {
        'Authorization': 'KakaoAK 6e5c89b594edc79f59e814b0b18ce81f',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    var options = {
        url: "https://kapi.kakao.com/v1/payment/ready",
        method: "POST",
        headers: headers,
        form: {
            'cid': 'TC0ONETIME',
            'partner_order_id': 'TC0ONETIME',
            'partner_user_id': 'TC0ONETIME',
            'item_name': 'Jelly',
            'quantity': req.body.amount,
            'total_amount': req.body.amount,
            'tax_free_amount': '0',
            'approval_url': 'http://localhost:3000/paymentComplete',
            'fail_url': 'https://blog.nopublisher.dev',
            'cancel_url': 'https://blog.nopublisher.dev',
        },
    }
    try {
        // 카카오API에 요청 전송
        let result = await request(options);
        // console.log(req.session);
        // req.session.user.tid = result.body.tid;
        // console.log(result);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }

}

const complete = async (req, res) => {
    var pg_token = req.body.pg_token;

    // 카카오API의 승인 응답을 받기위한 준비
    var headers = {
        'Authorization': 'KakaoAK 6e5c89b594edc79f59e814b0b18ce81f',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }
    var options = {
        url: "https://kapi.kakao.com/v1/payment/approve",
        method: "POST",
        headers: headers,
        form: {
            'cid': 'TC0ONETIME',
            'tid': req.session.user.tid,
            'pg_token': pg_token,
            'partner_order_id': 'TC0ONETIME',
            'partner_user_id': 'TC0ONETIME',
        },
    }

    // 승인 요청
    // let result = await request(options);
    //     var resultJson = JSON.parse(body);
    //     console.log(resultJson);
    //     req.user.creditRecord[req.user.creditRecord.length-1].pgToken = pg_token;
    //     // console.log('시간 차이: ', moment.duration(moment().diff(result.startDate)).asHours());
        
    //     // 이더 연동부분
    //     // 여기서 web3와 통신해서 사용자에게 토큰을 줘야한다.
    //     contract.deployed().then(function(contractInstance){
    //         contractInstance.transfer(
    //             '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', // 마스터 계정
    //             req.user.address, // 사용자 계정
    //             parseInt(resultJson.amount.total),
    //             {gas: 1000000, from: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'},
    //         ).then((bool) => {
    //             if(bool) console.log('이더에 저장 성공');
    //             else console.log('이더에 저장 실패');
    //             req.user.wallet += parseInt(resultJson.amount.total);

    //             req.user.save((err, result) => {
    //                 if(err) {console.log(err); res.send(err);}
    //                 res.render('credit_complete', {
    //                     amount: parseInt(resultJson.amount.total),
    //                     user: req.user,
    //                 })
    //             });
    //     })});
}
            
export {
    payment,
    complete,
};


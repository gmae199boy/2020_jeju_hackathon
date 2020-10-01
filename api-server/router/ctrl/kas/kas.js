import fetch from 'node-fetch';
import { caver, ABI_JSON, ADDRESS } from '../../../caver';

const createAccount = async() => {
    try {

        // POST /v2/account
        let kasFetch = await fetch("https://wallet-api.beta.klaytn.io/v2/account", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-Krn": "krn:1001:wallet:126:account:default",
                "Authorization": process.env.BASIC,
            },
            // timeout: 10,
        });

        return await kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
}

const readAccount = async() => {
    try {

    } catch (e) {
        console.log(e);
        return e;
    }
}

const registRoomTransaction = async(_addr, _deposit, _monthly, _state, _roomType) => {
    try {
        const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        const encodeABI = SC.methods.RegistRoom(
            _addr,
            _deposit.toString(),
            _monthly.toString(),
            _state.toString(),
            _roomType.toString()
        ).encodeABI();

        const body = {   
            "from": "0xcea46724a61a972439fa3dCd7476f7756c83Ea8b",
            "value": "0x0",
            "to": ADDRESS,
            "input": encodeABI,
            "submit": true,
        };

        // POST /v2/tx/contract/execute

        let kasFetch = await fetch("https://wallet-api.beta.klaytn.io/v2/tx/contract/execute", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Authorization": process.env.BASIC,
              "Content-Type": "application/json",
              "X-Krn": "krn:1001:wallet:126:account:default"
            },
          });
          return await kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
        // let SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        // let BCResult = await SC.methods.RegistRoom(
        //     req.body.address,
        //     req.body.deposit,
        //     req.body.monthlyPayment,
        //     req.body.state,
        //     req.body.roomType,
        // ).send({
        //     from: '0x1C314C6A895E2242FAAE8FAa96E93b428AD8EDD1',
        //     gas: '3000000',
        // });
        // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ' + BCResult);
}
// _oOrner,
// _oAddr,
// _oStructure,
// _oAcreage,
// _rName,
// _eName,
// _date,
// _term
const contractRoom = async (o) => {
    const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
    const encodeABI = SC.methods.WriteContract(
        // o.ornerName,
        // o.address,
        // o.structure,
        // o.acreage,
        // o.lessorName,
        // o.lesseeName,
        // o.date,
        // o.term
        "asd","asd","asd","asd","asd","asd","asd","asd"
    ).encodeABI();

    let kasFetch = await fetch("https://wallet-api.klaytnapi.com/v2/tx/contract/execute", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-chain-id": "1001",
            "Authorization": "Basic S0FTS1Q3TEFLMUFSWEpXUjJGQVVQWUpZOllCTWJDdkZ4aFRZS2tiQVU0dkxDTnpVaUNRQ3NZNCszL0o2Q1B0NHQ=",
        },
        body: JSON.stringify({
            from: "0x37f282976C5C106Ab97972ceaea2da2dbf5Eed49",
            to: "0xa17530000339882898838003CA6FC5505fb01679",
            value: "0x0",
            input: encodeABI,
            submit: true,
        })
    });
    return await kasFetch.json();
}

export {
    createAccount,
    readAccount,
    registRoomTransaction,
    contractRoom,
};
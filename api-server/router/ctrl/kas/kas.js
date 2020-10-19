import fetch from 'node-fetch';
import { caver, ABI_JSON, ADDRESS } from '../../../caver';

const createAccount = async() => {
    try {

        // POST /v2/account
        const kasFetch = await fetch("https://wallet-api.klaytnapi.com/v2/account", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-chain-id": "1001",
                "Authorization": process.env.BASIC,
            },
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
            "from": "0x6AA3ADE913467a141eec7D537A3Cd19bc0e715a5",
            "value": "0x0",
            "to": ADDRESS,
            "input": encodeABI,
            "submit": true,
        };

        // POST /v2/tx/contract/execute
        const kasFetch = await fetch("https://wallet-api.klaytnapi.com/v2/tx/fd/contract/execute", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": process.env.BASIC,
                "Content-Type": "application/json",
                "x-chain-id": "1001",
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

const getRoomTransactionHash = async (hash) => {
    try {
        const kasFetch = await fetch(`https://wallet-api.klaytnapi.com/v2/tx/${hash}`, {
            method: "GET",
            headers: {
                "Authorization": process.env.BASIC,
                "Content-Type": "application/json",
                "x-chain-id": "1001",
            },
        });

        return await kasFetch.json();
    } catch (e) {

    }
}

const getRoomTransaction = async (roomId) => {
    try {
        const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        const encodeABI = SC.methods.rooms(
            roomId,
        ).encodeABI();

        const kasFetch = await fetch("https://node-api.klaytnapi.com/v1/klaytn", {
            method: 'POST',
            headers: {
                "Authorization": process.env.BASIC,
                "Content-Type": "application/json",
                "x-chain-id": "1001",
            },
            body: JSON.stringify({
                id: 1,
                method: 'klay_call',
                params: [
                    {
                        from: ADDRESS,
                        to: ADDRESS,
                        data: encodeABI,
                    },
                    "latest",
                ],
            }),
        });

        return kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
}

const confirmContractTransaction = async (contract) => {
    try {
        const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        const encodeABI = SC.methods.WriteContract(
            contract.officeOwner,
            contract.officeAddress,
            contract.officeStructure,
            contract.officeAcreage,
            contract.lessorName,
            contract.lesseeName,
            contract.data,
            contract.term
        ).encodeABI();

        const body = {   
            "from": "0x6AA3ADE913467a141eec7D537A3Cd19bc0e715a5",
            "value": "0x0",
            "to": ADDRESS,
            "input": encodeABI,
            "submit": true,
        };

        // POST /v2/tx/contract/execute
        const kasFetch = await fetch("https://wallet-api.klaytnapi.com/v2/tx/fd/contract/execute", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": process.env.BASIC,
                "Content-Type": "application/json",
                "x-chain-id": "1001",
            },
        });

        return await kasFetch.json();
    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    createAccount,
    readAccount,
    registRoomTransaction,
    // contractRoom,
    getRoomTransaction,
    getRoomTransactionHash,
    confirmContractTransaction,
};
// _oOrner,
// _oAddr,
// _oStructure,
// _oAcreage,
// _rName,
// _eName,
// _date,
// _term
// const contractRoom = async (o) => {
//     const SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
//     const encodeABI = SC.methods.WriteContract(
//         // o.ornerName,
//         // o.address,
//         // o.structure,
//         // o.acreage,
//         // o.lessorName,
//         // o.lesseeName,
//         // o.date,
//         // o.term
//         "asd","asd","asd","asd","asd","asd","asd","asd"
//     ).encodeABI();

//     let kasFetch = await fetch("https://wallet-api.klaytnapi.com/v2/tx/contract/execute", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "x-chain-id": "1001",
//             "Authorization": "Basic S0FTS1Q3TEFLMUFSWEpXUjJGQVVQWUpZOllCTWJDdkZ4aFRZS2tiQVU0dkxDTnpVaUNRQ3NZNCszL0o2Q1B0NHQ=",
//         },
//         body: JSON.stringify({
//             from: "0x37f282976C5C106Ab97972ceaea2da2dbf5Eed49",
//             to: "0xa17530000339882898838003CA6FC5505fb01679",
//             value: "0x0",
//             input: encodeABI,
//             submit: true,
//         })
//     });
//     return await kasFetch.json();
// }

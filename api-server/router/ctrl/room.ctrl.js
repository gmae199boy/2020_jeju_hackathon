import {Room} from '../../model/room';
import {Contract} from '../../model/contract';
import {Lessor} from '../../model/lessor';
import { caver, ABI_JSON, ADDRESS } from '../../caver';
import {
    registRoomTransaction,
    getRoomTransaction,
} from './kas/kas';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const imagePath = path.join(__dirname, "/..", "/..", "/..", "/images/");

/**
 * 
 * response, reply 인 res 인자는 사용하지 않습니다.
 * fastify는 옵션으로 json 스키마를 검증하는 기능을 내장하고 있습니다.
 * 따라서 스키마 검증은 따로 작성합니다.
 * 서버 사이드 랜더링은 사용하지 않습니다. 
 * return은 json형식만 반환합니다.
 * 
 */

/**
 * 테스트용 코드
 * DB를 지우고 다시 시작했을 때, 매물이 하나도 없으니 예제 3개를 만들어서
 * 등록해주는 함수
 */

/**
 * 
 * @param {*} req request 요청 객체
 * @return {json} Room json 파일 형식
 */
const getRoom = async (req, res) => {
    try {
        // (디버그용) 등록된 매물이 없을 경우, 
        // 매물 3개를 임의 등록한다.
        // const firstId = await Room.findByRoomId(0);
        // if (firstId == undefined) {
        //     await createRoomList();
        // }

        let room = await Room.findByRoomId(req.params.id);
        
        let images = new Array();
        for (let i = 0; i < room.imagePath.length; ++i) {
            images.push(fs.readFileSync(imagePath + room.imagePath[i]));
        }

        const tran = await getRoomTransaction(0);
        console.log(tran.result);

        const tt = await caver.abi.decodeParameters([
            {
                "name": "registLessor",
                "type": "address"
            },
            {
                "name": "addr",
                "type": "string"
            },
            {
                "name": "deposit",
                "type": "uint32"
            },
            {
                "name": "monthlyPayment",
                "type": "uint32"
            },
            {
                "name": "state",
                "type": "uint8"
            },
            {
                "name": "roomType",
                "type": "uint8"
            },
            // {
            //     "name": "reported",
            //     "type": "address[1]"
            // },
            // {
            //     "name": "reviewIndex",
            //     "type": "uint256[1]"
            // }
        ],
        tran.result
        );

        console.log(tt);

        room.images = images;

        return room;


        // let SC = new caver.klay.Contract(ABI_JSON, ADDRESS);
        // let result = await SC.methods.GetRoom(req.params.id).call();
        // console.log(result);
        // return result;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getRoomList = async (req, res) => {
    try {
        // const firstId = await Room.findByRoomId(0);
        // if (firstId == undefined) {
        //     await createRoomList();
        // }
        let page = req.query.page;
        let list = await Room.getRoomList(page);

        for (let i = 0; i < list.length; ++i) {
            if (list[i].imagePath[0] == undefined) continue;
            list[i].images = fs.readFileSync(imagePath + list[i].imagePath[0]);
        }

        console.log(list);
    
        return list;
    } catch (e) {
    console.log(e);
        return e;
    }
}

const searchRoomList = async (req, res) => {
    try {
        let page = req.query.page;
        const list = await Room.searchByAddress(req.params.address, page);

        for (let i = 0; i < list.length; ++i) {
            if (list[i].imagePath[0] == undefined) continue;
            list[i].images = fs.readFileSync(imagePath + list[i].imagePath[0]);
        }

        console.log(list);
        return list;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const registRoom = async (req, res) => {
    try {
        // _addr, _deposit, _monthly, _state, _roomType
        let room = await registRoomTransaction(
            req.body.address,
            0, // deposit
            req.body.monthlyPayment,
            req.body.state,
            req.body.roomType,
        );

        console.log(room);

        let pathArray = new Array();
        if(req.files != undefined) {
            for (let i = 0; i < req.files.length; ++i) {
                pathArray.push(req.files[i].filename);
            }
        }

        const newRoom = new Room({
            ...req.body,
            imagePath: pathArray,
            transactionHash: room.transactionHash,
        });

        return await Room.Save(newRoom);
    } catch (e) {
        console.log(e);
        return e;
    }
}

const deleteRoom = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const updateRoom = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const reportRoom = async (req, res) => {
    try {
        let room = await Room.findByRoomId(req.params.id);
        
        if (!room) return null;

        room.reported.push({...req.body});
        return await Room.Save(room);
    } catch (e) {
        console.log(e);
        return e;
    }
}

const contractRoom = async (req, res) => {
    try {
        // const room = await Room.findByRoomId(req.params.id);
        let contract = await Contract.findOfficeId(req.params.id);
        console.log(contract);
        if (contract == undefined) {
            const newContract = new Contract({
                ...req.body,
            });
            return await Contract.Save(newContract);
        }
        console.log(req.body);
        contract = {...req.body};
        return await contract.save();

    } catch (e) {
        console.log(e);
        return e;
    }
}

export  {
    getRoom,
    registRoom,
    deleteRoom,
    updateRoom,
    getRoomList,
    reportRoom,
    searchRoomList,
    contractRoom,
};
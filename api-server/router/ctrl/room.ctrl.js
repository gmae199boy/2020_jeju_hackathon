import {Room} from '../../model/room';
import {Contract} from '../../model/contract';
import {Lessor} from '../../model/lessor';
import {Lessee} from '../../model/lessee';
import { caver, ABI_JSON, ADDRESS } from '../../caver';
import {
    registRoomTransaction,
    getRoomTransaction,
    confirmContractTransaction,
} from './kas/kas';
import fs from 'fs';
import path from 'path';
import { on } from 'process';

const imagePath = path.join(__dirname, "/..", "/..", "/..", "/images/");

const CONTRACT_NONE = 1;
const CONTRACT_ING = 2;
const CONTRACT_DONE = 4;

/**
 * 
 * response, reply 인 res 인자는 사용하지 않습니다.
 * fastify는 옵션으로 json 스키마를 검증하는 기능을 내장하고 있습니다.
 * 따라서 스키마 검증은 따로 작성합니다.
 * return은 json형식만 반환합니다.
 * 
 */

/**
 * 
 * @param {*} req request 요청 객체
 * @return {json} Room json 파일 형식
 */
const getRoom = async (req, res) => {
    try {
        let room = await Room.findByRoomId(req.params.id);
        console.log(room);
        
        let images = new Array();
        for (let i = 0; i < room.imagePath.length; ++i) {
            images.push(fs.readFileSync(imagePath + room.imagePath[i]));
        }

        // 블록체인에서 정보 읽어오기 (function은 rlp를 먼저 decode 한 다음 decode 해야한다)
        // 이건 그냥 public 변수를 읽어오는 것이기 때문에 그냥 하면 된다.
        // const tran = await getRoomTransaction(0);
        // console.log(tran.result);

        // const tt = await caver.abi.decodeParameters([
        //     {
        //         "name": "registLessor",
        //         "type": "address"
        //     },
        //     {
        //         "name": "addr",
        //         "type": "string"
        //     },
        //     {
        //         "name": "deposit",
        //         "type": "uint32"
        //     },
        //     {
        //         "name": "monthlyPayment",
        //         "type": "uint32"
        //     },
        //     {
        //         "name": "state",
        //         "type": "uint8"
        //     },
        //     {
        //         "name": "roomType",
        //         "type": "uint8"
        //     },
        //     // {
        //     //     "name": "reported",
        //     //     "type": "address[1]"
        //     // },
        //     // {
        //     //     "name": "reviewIndex",
        //     //     "type": "uint256[1]"
        //     // }
        // ],
        // tran.result
        // );

        // console.log(tt);

        room.images = images;

        return room;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const getRoomList = async (req, res) => {
    try {
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
        const roomInfo = await Room.Save(newRoom);

        await Lessor.updateOne({_id: req.body.registLessor}, {
            $push: {registRoom: roomInfo._id}
        });

        console.log(roomInfo);
        return roomInfo;
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
        const room = await Room.findByRoomId(req.params.id);
        
        if (!room) return {err: "지정된 방 정보가 없습니다."};

        const reportContent = {
            reportLessee: req.body.reportLessee,
            reason: req.body.reason,
        };

        const reportedRoom = await Room.updateOne({id: room.id}, {
            $push: {reportContent}
        });

        console.log(reportRoom);

        return reportRoom;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const createLessorContractRoom = async (req, res) => {
    try {
        const lessor = await Lessor.findByLessorId(req.body.lessorId);

        const contract = await Contract.updateOne({roomId: req.body.roomId}, {
            ...req.body,
            lessor: lessor._id,
        });
        console.log(contract);
        return contract;

    } catch (e) {
        console.log(e);
        return e;
    }
}

const createLesseeContractRoom = async (req, res) => {
    try {
        const contract = await Contract.findOne({roomId: req.body.roomId});
        const room = await Room.findByRoomId(req.params.id);
        const lessee = await Lessee.findByLesseeId(req.body.lesseeId);

        if(contract == undefined) {
            const newContract = new Contract({
                ...req.body,
                roomId: req.body.roomId,
                room: room._id,
                lessee: lessee._id,
                state: CONTRACT_ING,
            });

            const returnContract = await Contract.Save(newContract);
            console.log(returnContract);
            await Lessee.updateOne({id: lessee.id}, {$push: {contracts: returnContract._id}});
            await Lessor.updateOne({id: 0}, {$push: {contracts: returnContract._id}});
            return returnContract;
        }

        console.log(contract);
        // await Lessee.updateOne({id: lessee.id}, {$push: {contracts: contract._id}});
        return await Contract.updateOne({roomId: req.body.roomId}, {
            ...req.body,
        });
    } catch (e) {
        console.log(e);
        return e;
    }
}
const getContract = async (req, res) => {
    return await Contract.findOne({roomId: req.body.roomId});
}

const confirmContract = async (req, res) => {
    try {
        const room = await Room.findByRoomId(req.body.roomId);
        const lessor = await Lessor.findByLessorId(req.body.lessorId);
        const lessee = await Lessee.findByLesseeId(req.body.lesseeId);
        const contract = await Contract.findOneAndUpdate({
            room: room._id,
            lessor: lessor._id,
            lessee: lessee._id,
        }, {
            state: CONTRACT_DONE,
        });
        const contractTransaction = await confirmContractTransaction(contract);

        console.log(contractTransaction);

        return contractTransaction;
    } catch (e) {
        console.log(e);
        return e;
    }
}

function chatForRoom (connection, req)  {
    connection.socket.on('message', (message) => {
        console.log(message);
        this.websocketServer.clients.forEach(function each(client) {
            const json = JSON.parse(message);
            if (client.readyState === 1) {
                client.send(JSON.stringify({name: json.name, content: json.content}));
            }
        })
    });
}

export  {
    getRoom,
    registRoom,
    deleteRoom,
    updateRoom,
    getRoomList,
    reportRoom,
    searchRoomList,
    createLessorContractRoom,
    createLesseeContractRoom,
    getContract,
    confirmContract,
    chatForRoom,
};
import {
    getRoom,
    registRoom,
    deleteRoom,
    updateRoom,
    getRoomList,
    reportRoom,
    searchRoomList,
    createLessorContractRoom,
    createLesseeContractRoom,
    confirmContract,
    chatForRoom,
} from './ctrl/room.ctrl';
import {     
    getRoomSchema,
    getRoomListSchema,
    registRoomSchema, 
} from './schema/roomSchema';
import multer from 'fastify-multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"/..", "/..", "/images/" ));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
});
  
const upload = multer({ storage: storage });

const routes = [
    {
        method: 'GET',
        url: '/room/chat/:id',
        websocket: true,
        handler: chatForRoom,
    },
    {
        method: 'GET',
        url: '/rooms',
        handler: getRoomList,
    },
    {
        method: 'GET',
        url: '/rooms/:address',
        handler: searchRoomList,
    },
    {
        method: 'POST',
        url: '/room/create',
        preHandler: upload.array("images", 30),
        handler: registRoom,
        schema: registRoomSchema,
    },
    {
        method: 'POST',
        url: '/room/lessor_contract/:id',
        handler: createLessorContractRoom,
    },
    {
        method: 'POST',
        url: '/room/lessee_contract/:id',
        handler: createLesseeContractRoom,
    },
    {
        method: 'POST',
        url: '/room/confirm_contract/:id',
        handler: confirmContract,
    },
    {
        method: 'POST',
        url: '/room/report/:id',
        handler: reportRoom,
    },
    {
        method: 'GET',
        url: '/room/:id',
        handler: getRoom,
    },
    {
        method: 'DELETE',
        url: '/room/:id',
        handler: deleteRoom,
    },
    {
        method: 'PUT',
        url: '/room/:id',
        handler: updateRoom,
    },
];


export default routes;
import {
    getRoom,
    registRoom,
    deleteRoom,
    updateRoom,
    getRoomList,
    reportRoom,
    searchRoomList,
    contractRoom,
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
        url: '/room/contract/:id',
        handler: contractRoom,
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
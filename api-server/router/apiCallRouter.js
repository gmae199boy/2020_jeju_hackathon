import {
    roomInfoCall,
} from './ctrl/apiCall.ctrl';

const routes = [
    {
        method: 'GET',
        url: '/api/room_info/:code/:yy/:mm',
        handler: roomInfoCall,
    },
];


export default routes;
import {
    payment,
    complete,
} from './ctrl/shop.ctrl';

const routes = [
    {
        method: 'POST',
        url: '/payment',
        handler: payment,
    },
    {
        method: 'POST',
        url: '/payment/complete',
        handler: complete,
    }
];


export default routes;
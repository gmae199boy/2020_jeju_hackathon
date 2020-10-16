import {
    readLessor,
    createLessor,
    deleteLessor,
    updateLessor,
    loginLessor,
    logoutLessor,
} from './ctrl/lessor.ctrl';
import { createLessorSchema } from './schema/lessorSchema';
import fastifyPassport from "fastify-passport";
// import Lessor from '../model/lessor';

// fastifyPassport.use(Lessor.createStrategy());
// fastifyPassport.serializeUser(Lessor.serializeUser());
// fastifyPassport.deserializeUser(Lessor.deserializeUser());

const routes = [
    {
        method: 'POST',
        url: '/lessor/signup',
        handler: createLessor,
        schema: createLessorSchema,
    },
    {
        method: 'POST',
        url: '/lessor/login',
        handler: loginLessor,
        // preValidation: fastifyPassport.authenticate("local", { authInfo: false }),
    },
    {
        method: 'GET',
        url: '/lessor/logout',
        handler: logoutLessor,
    },
    {
        method: 'GET',
        url: '/user/mypage',
        handler: readLessor,
    },
    {
        method: 'DELETE',
        url: '/lessor/:name',
        handler: deleteLessor,
    },
    {
        method: 'PUT',
        url: '/lessor/:name',
        handler: updateLessor,
    },
]

export default routes;

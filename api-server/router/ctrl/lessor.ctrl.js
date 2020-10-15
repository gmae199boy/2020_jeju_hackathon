import {Lessor} from '../../model/lessor';
import { createAccount, } from './kas/kas';

const createLessor = async (req, res) => {
    try {
        let account = await createAccount();

        // if(!req.body.name || !req.body.passoword) return {err: "name이나 password가 없음"};

        const newLessor = new Lessor({...req.body, address: account.address, userType: 1});
        req.session.user = {
            user: newLessor,
        }

        return await Lessor.Save(newLessor);
    } catch (e) {
        console.log(e);
    }
}

const readLessor = async(req, res) => {
    try {
        // const lessor = await Lessor.find();
        // return lessor;
        if(req.session.user == undefined) return {err: "유저 세션이 없음"};
        console.log(req.session.user);
        return req.session.user;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const updateLessor = async (req, res) => {

}

const deleteLessor = async (req, res) => {

}

const loginLessor = async (req, res) => {
    try {
        const lessor = await Lessor.findByLessorName(req.body.name);
        if(lessor.name != req.body.name || lessor.password != req.body.password) 
            return null;

        req.session.user = {
            user: lessor,
        }
        return lessor;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const logoutLessor = async (req, res) => {
    if(req.session.user == undefined) return false;
    req.session.user = undefined;
    return true;
}

export {
    createLessor,
    readLessor,
    updateLessor,
    deleteLessor,
    loginLessor,
    logoutLessor,
};
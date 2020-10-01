import {Lessor} from '../../model/lessor';
import { createAccount, } from './kas/kas';

const createLessor = async (req, res) => {
    try {
        let account = await createAccount();

        const newLessor = new Lessor({...req.body, address: account.result.address});
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

export {
    createLessor,
    readLessor,
    updateLessor,
    deleteLessor,
    loginLessor,
};
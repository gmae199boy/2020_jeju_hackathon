import {Lessee} from '../../model/lessee';
import { createAccount, } from './kas/kas';

const createLessee = async (req, res) => {
    try {
        let account = await createAccount();

        // if(!req.body.name || !req.body.passoword) return {err: "name이나 password가 없음"};

        const newLessee = new Lessee({...req.body, address: account.address});

        req.session.user = {
            user: newLessee,
        }

        return await Lessee.Save(newLessee);
    } catch (e) {
        console.log(e);
        return e;
    }
}

const readLessee = async(req, res) => {
    try {
        return req.session.user;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const updateLessee = async (req, res) => {

}

const deleteLessee = async (req, res) => {

}

const loginLessee = async (req, res) => {
    try {
        const lessee = await Lessee.findByLesseeName(req.body.name);
        console.log(lessee)
        if(lessee.name != req.body.name || lessee.password != req.body.password) 
            return null;
        // if(req.session.user == undefined) {
        //     req.session.user = new Array();
        // }
        req.session.user = {
            user: lessee,
        }
        return lessee;
    } catch (e) {
        console.log(e);
        return e;
    }
}

const logoutLessee = async (req, res) => {
    if(req.session.user == undefined) return false;
    req.session.user = undefined;
    return true;
}

export {
    createLessee,
    readLessee,
    updateLessee,
    deleteLessee,
    loginLessee,
    logoutLessee,
};
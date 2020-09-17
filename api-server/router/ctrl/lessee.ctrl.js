import {Lessee} from '../../model/lessee';
import { createAccount, } from './kas/kas';

const createLessee = async (req, res) => {
    try {
        let account = await createAccount();

        const newLessee = new Lessee({...req.body, address: account.result.address});
        req.session.user = {
            name: newLessee.name,
        };
        return await Lessee.Save(newLessee);
    } catch (e) {
        console.log(e);
    }
}

const readLessee = async(req, res) => {
    try {

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
        if(lessee.name != req.body.name || lessee.password != req.body.password) 
            return null;

        req.session.user = {
            name: lessee.name,
        };
        return {lessee};
    } catch (e) {
        console.log(e);
        return e;
    }
}

export {
    createLessee,
    readLessee,
    updateLessee,
    deleteLessee,
    loginLessee,
};
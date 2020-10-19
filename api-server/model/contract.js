import mongoose from 'mongoose';

const ContractSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
    lessor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessor',
    },
    lessee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessee',
    },
    officeOwner: {type: String,},
    officeAddress: {type: String,},
    officeStructure: {type: String,},
    officeAcreage: {type: Number,},
    lessorName: {type: String,},
    lessorSSN: {type: String,},
    lessorphoneNumber: {type: String,},
    lessorAddress: {type: String,},
    lesseeName: {type: String,},
    lesseeSSN: {type: String,},
    lesseePhoneNumber: {type: String,},
    lesseeAddress: {type: String,},
    date: {type: String,},
    term: {type: String,},
    state: {type: Number,},
});

ContractSchema.statics.findByContractId = async function(contractId) {
    return await this.findOne({ id: contractId }).lean();
}

ContractSchema.statics.findOfficeId = async function(officeId) {
    return await this.findOne({officeId}).lean();
}

ContractSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Contract = mongoose.model('Contract', ContractSchema);
export {Contract};
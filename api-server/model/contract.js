import mongoose from 'mongoose';

const ContractSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    // room: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Room',
    // },
    // lessor: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lessor',
    // },
    // lessee: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lessee',
    // },
    office: {
        orner: {
            type: String,
        },
        address: {
            type: String,
        },
        struture: {
            type: String,
        },
        acreage: {
            type: Number,
        },
    },
    contractParty: {
        lessor: {
            name: {
                type: String,
            },
            SSN: {
                type: String,
            },
            phoneNumber: {
                type: String,
            },
            address: {
                type: String,
            },
        },
        lessee: {
            name: {
                type: String,
            },
            SSN: {
                type: String,
            },
            phoneNumber: {
                type: String,
            },
            address: {
                type: String,
            },
        },
    },
    contractContent: {
        date: {
            type: String,
        },
        term: {
            type: String,
        },
    },
});

ContractSchema.statics.findByContractName = async function(contractName) {
    return await this.findOne({ name: contractName }).lean();
}

ContractSchema.statics.findByContractId = async function(contractId) {
    return await this.findOne({ id: contractId }).lean();
}

ContractSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Contract = mongoose.model('Contract', ContractSchema);
export {Contract};
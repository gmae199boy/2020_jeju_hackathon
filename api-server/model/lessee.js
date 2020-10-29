import mongoose from 'mongoose';

const LesseeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    latelySeeRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
        }
    ],
    likeRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            res: "Room",
        }
    ],
    payment: [
        {
            tid: {type: String, index: true},
            pgToken: {type: String},
        },
    ],
    credit: {
        type: String,
    },
    address: {
        type: String,
    },
    userType: {
        type: Number,
    },
    token: {
        type: Number,
    },
    contracts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            res: "Contract",
        }
    ],
});

LesseeSchema.statics.findByLesseeName = async function(lesseeName) {
    return await this.findOne({ name: lesseeName }).lean();
}

LesseeSchema.statics.findByLesseeId = async function(lesseeId) {
    return await this.findOne({ id: lesseeId }).populate({path: 'contracts', model: 'Contract'}).lean();
}

LesseeSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Lessee = mongoose.model('Lessee', LesseeSchema);
export {Lessee};
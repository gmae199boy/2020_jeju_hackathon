import mongoose from 'mongoose';

const perPage = 20;

const RoomSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    roomType: {
        type: Number,
        required: true,
    },
    // deposit: {
    //     type: Number,
    // },
    monthlyPayment: {
        type: Number,
    },
    address: {
        type: String,
    },
    registLessor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessor',
    },
    state: {
        type: Number,
    },
    content: {
        type: String,
    },
    reported: [
        {
            reportLessee: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lessee',
            },
            reason: {
                type: String,
            },
        }
    ],
    // 필터링용 DB
    area: {
        type: String,
    },
    // nearStation: [
    //     {
    //         name: {
    //             type: String,
    //         },
    //         walkTime: {
    //             type: Number,
    //         },
    //     }
    // ],
    review: [
        {
            auth: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lessee',
            },
            stars: {
                type: Number,
            },
            content: {
                type: String,
            },
        }
    ],
    imagePath: [
        {
            type: String,
        }
    ],
    transactionHash: {
        type: String,
    },
    coordsx: {
        type: Number,
    },
    coordsy: {
        type: Number,
    },
    contract: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contract',
        }
    ],
    structure: {type: String,},
    acreage: {type: Number,},
});

RoomSchema.statics.findByRoomName = async function(roomName) {
    return await this.findOne({ name: roomName }).lean();
};

RoomSchema.statics.findByRoomId = async function(roomId) {
    return await this.findOne({ id: roomId }).populate('registLessor').lean();
};

RoomSchema.statics.getRoomList = async function( page = 1 ) {
    return await this.find({}, { 
        _id: 1, 
        id: 1,
        name: 1,
        roomType: 1,
        deposit: 1,
        monthlyPayment: 1,
        address: 1,
        state: 1,
        imagePath: 1,
    })
    .sort({ $natural: 1 })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();
}

RoomSchema.statics.searchByAddress = async function(address, page = 1) {
    return await this.find({address: { $regex: address }}, { 
        _id: 1, 
        id: 1,
        name: 1,
        roomType: 1,
        deposit: 1,
        monthlyPayment: 1,
        address: 1,
        state: 1,
        imagePath: 1,
    })
    .sort({ $natural: 1 })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .lean();
}

RoomSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Room = mongoose.model('Room', RoomSchema);
export {Room};
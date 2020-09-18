import mongoose from 'mongoose';

const LesseeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
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
    ]
});

LesseeSchema.statics.findByLesseeName = async function(lesseeName) {
    return await this.findOne({ name: lesseeName }).lean();
}

LesseeSchema.statics.findByLesseeId = async function(lesseeId) {
    return await this.findOne({ id: lesseeId }).lean();
}

LesseeSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Lessee = mongoose.model('Lessee', LesseeSchema);
export {Lessee};
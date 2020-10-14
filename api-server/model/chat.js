import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    lessee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessee',
    },
    lessor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lessor',
    },
    
});

ChatSchema.statics.findByLessorName = async function(lessorName) {
    return await this.findOne({ name: lessorName }).lean();
}

ChatSchema.statics.findByLessorId = async function(lessorId) {
    return await this.findOne({ id: lessorId }).lean();
}

ChatSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}

const Chat = mongoose.model('Chat', ChatSchema);
export {Chat};
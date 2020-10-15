import mongoose from 'mongoose';

const ChatRoomSchema = new mongoose.Schema({
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

ChatRoomSchema.statics.findByLessorName = async function(lessorName) {
    return await this.findOne({ name: lessorName }).lean();
}

ChatRoomSchema.statics.findByLessorId = async function(lessorId) {
    return await this.findOne({ id: lessorId }).lean();
}

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);
export {ChatRoom};
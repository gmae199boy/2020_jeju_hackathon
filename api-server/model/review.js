import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
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
});

ReviewSchema.statics.findByReviewName = async function(userName) {
    return await this.findOne({ name: userName });
};

ReviewSchema.statics.findByReviewId = async function(userId) {
    return await this.findOne({ id: userId });
};

const Review = mongoose.model('Review', ReviewSchema);
export {Review};
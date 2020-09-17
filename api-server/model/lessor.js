import mongoose from 'mongoose';

const LessorSchema = new mongoose.Schema({
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
    registRoom: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
        },
    ],
    address: {
        type: String,
    },
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
        },
    ]
});

LessorSchema.statics.findByLessorName = async function(lessorName) {
    return await this.findOne({ name: lessorName });
}

LessorSchema.statics.findByLessorId = async function(lessorId) {
    return await this.findOne({ id: lessorId });
}

LessorSchema.statics.Save = async function(instant) {
    if(instant.id != undefined) return await instant.save();

    let idNum = await this.estimatedDocumentCount({});

    instant.id = idNum;
    return await instant.save();
}



LessorSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            name: this.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d',
        },
    );
    return token;
}

const Lessor = mongoose.model('Lessor', LessorSchema);
export {Lessor};
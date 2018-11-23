const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

const graduateSchema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    university: { type: String, },
    degree: { type: String, },
    major: { type: String, },
    gpa: { type: Number},
    employers: [String],
    locations: [String],
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
module.exports = mongoose.model('Graduate', graduateSchema);
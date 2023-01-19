const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pickupSchema = new Schema({
    creatorUser: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    playersRequested: {
            type: Number, 
            min: 1, max:3,
    },
    playersAccepted: [{
        type: Schema.Types.ObjectId, 
        ref: 'User', 
    }],
    game: {
        type: String, 
        enum: ['Tennis', 'Pickleball', 'Badminton'], 
        default: 'Tennis',
    },
    skillLevel: {
        type: String, 
        enum: ['1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0']
    }, 
    competitiveness: {
        type: String, 
        enum: ['High', 'Medium', 'Low'], 
        default: 'Medium',
    }, 
    gameLocation: { type: String, }, //lat, long? Ultimately need to have an array of specific courts or game locations 
    dateRequested: Date, //should contain date and time. What about TimeZone?
    timeRequested: Date, 
    durationRequested:  {
        type: Number, 
        enum: ['30', '60', '90', '120']
    }, 
    genderToPlayRequested: String, 
}, {
  timestamps: true
});

module.exports = mongoose.model('Pickup', pickupSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gamesSchema = new Schema({
    userGame: {
        type: String, 
        enum: ['Tennis', 'Pickleball', 'Badminton'], 
        default: 'Tennis',
    },
    skillLevel: {
        type: String, 
        enum: ['1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0']
    }, 
    yearsExperience: Number, 
    genderPreference: String,
    gameLocation: {  //lat, long? Ultimately need to have an array of specific courts or game locations
        type: String, 
    }
}, {
    timestamp: true
});


module.exports = mongoose.model('userGame', profileSchema)
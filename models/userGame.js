const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersGameSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    game: {
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

// Static methods are callable on the Model (userGame). Intended to create a new userGame if one doesn't yet exist
usersGameSchema.statics.saveUsersGame = function(userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate(
      // query
      { user: userId },
      // update - in the case the profile is upserted
      { user: userId },
      // upsert option creates the doc if it doesn't exist!
      { upsert: true, new: true }
    );
  };
  

module.exports = mongoose.model('userGame', usersGameSchema)
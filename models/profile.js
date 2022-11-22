const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    location: {type: String, default: 'timbuktu'}, //general location to map with other players
    gender: {type: String}, 
    language: {type: String, default: 'en-US'},
    country: {type: String, default: 'US'},
    // two digit country codes: https://www.nationsonline.org/oneworld/country_code_list.htm
}, {
    timestamps: true
});

// Static methods are callable on the Model (Profile). Intended to create a profile if one doesn't yet exist
profileSchema.statics.getProfile = function(userId) {
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
  

module.exports = mongoose.model('Profile', profileSchema)
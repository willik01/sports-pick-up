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


const languageSchema = new Schema({
    language: {
        type: String, 
        default: 'en-US'
    }, //list of supported languages 
}, {
    timestamp: true
})

// two digit country codes: https://www.nationsonline.org/oneworld/country_code_list.htm
const countrySchema = new Schema({ 
    country: {
        type: String, 
        default: 'US'
    }, //list of supported countries
}, {
    timestamp: true
})

//User schema with embedded games/locaiton/language/coutnry
const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    location: {type: String, default: 'timbuktu'}, //general location to map with other players
    games: [gamesSchema],
    language: [languageSchema],
    country: [countrySchema],
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
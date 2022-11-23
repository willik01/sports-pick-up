const Profile = require('../../models/profile');

module.exports = {
    getProfile, 
    saveProfile,
};

async function getProfile(req, res) {
    const profile = await Profile.getProfile(req.user._id);
    res.json(profile);
}

async function saveProfile(req, res) {
    // console.log('controllers profiels.js - request body: ', req.body)
    // const profile = await Profile.findOneAndUpdate({user:req.user._id}, req.body, {new:true}).exec();
    const profile = await Profile.findOneAndUpdate({user:req.user._id}, req.body);
    console.log('profile: ',profile)
    res.json(profile);
}

const Profile = require('../../models/profile');

module.exports = {
    getProfile, 
    saveProfile,
    getPUOwnerProfile,
};

async function getProfile(req, res) {
    const profile = await Profile.getProfile(req.user._id);
    res.json(profile);
}

async function saveProfile(req, res) {
    const profile = await Profile.findOneAndUpdate({user:req.user._id}, req.body);
    res.json(profile);
}

async function getPUOwnerProfile(req, res) {
        const profile = await Profile.findOne({user: req.params.id});
        res.json(profile);         
}
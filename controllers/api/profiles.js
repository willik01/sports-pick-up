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
    const profile = await Profile.getProfile(req.user._id);
    await profile.addProfile(profile, req.params);
    res.json(profile);
}

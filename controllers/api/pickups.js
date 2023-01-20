const {ObjectId} = require('mongodb');
const Pickup = require('../../models/pickup');

module.exports = {
    getAllPickups, 
    // getUsersPickups,
    updatePickup,
    addplayersAccepted, 
    // deletePickup,
};

async function getAllPickups(req, res) {
    const allPickups = await Pickup.find({});
    res.json(allPickups);
}
// async function getUsersPickups(req, res) {
//     const usersGames = await userGame.find({user:req.user._id});
//     res.json(usersGames);
// }

async function updatePickup(req, res) {
    req.body._id ||= ObjectId() // if no userGame ID, create new one for upsert
    const pickup = await Pickup.findOneAndUpdate({_id:req.body._id }, req.body, { upsert: true, new: true });
    res.json(pickup);
}

async function addplayersAccepted(req, res) {
    const acceptPickup = await Pickup.findOneAndUpdate({_id:req.body._id }, req.body);
    res.json(acceptPickup);
}

const {ObjectId} = require('mongodb');
const Pickup = require('../../models/pickup');

module.exports = {
    getAllPickups, 
    // getUsersPickups,
    updatePickup,
    // deletePickup,
    // getCompetitivenessEnums,
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

// async function deletePickup(req, res) {
//     const deletedUserGame = await userGame.findOneAndRemove({_id:req.body._id})
//     res.json(deletedUserGame);
// }

// async function getCompetitivenessEnums(req, res) {
//     const userGameEnums = await userGame.schema.path('game').enumValues;
//     res.json(userGameEnums);

// }

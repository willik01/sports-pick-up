const userGame = require('../../models/userGame');
const Profile = require('../../models/userGame');
const {ObjectId} = require('mongodb');
const { deleteModel } = require('mongoose');

module.exports = {
    getUsersGames, 
    updateUsersGame,
    deleteUsersGame,
};

async function getUsersGames(req, res) {
    const usersGames = await userGame.find({user:req.user._id});
    res.json(usersGames);
}

async function updateUsersGame(req, res) {
    req.body._id ||= ObjectId() // if no userGame ID, create new one for upsert
    const usersGame = await userGame.findOneAndUpdate({_id:req.body._id }, req.body, { upsert: true, new: true });
    res.json(usersGame);
}

async function deleteUsersGame(req, res) {
    const deletedUserGame = await userGame.findOneAndRemove({_id:req.body._id})
    res.json(deletedUserGame);
}
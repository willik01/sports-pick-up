const userGame = require('../../models/userGame');
// const Profile = require('../../models/userGame');//is this needed???
const {ObjectId} = require('mongodb');
const { deleteModel } = require('mongoose');

module.exports = {
    getUsersGames, 
    updateUsersGame,
    deleteUsersGame,
    getUserGameEnums,
    getSkillLevelEnums,
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

async function getUserGameEnums(req, res) {
    const userGameEnums = await userGame.schema.path('game').enumValues;
    res.json(userGameEnums);

}

async function getSkillLevelEnums(req, res) {
    const skillLevelEnums = await userGame.schema.path('skillLevel').enumValues;
    res.json(skillLevelEnums);
}

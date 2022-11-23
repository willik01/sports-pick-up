const userGame = require('../../models/userGame');
const Profile = require('../../models/userGame');
const {ObjectId} = require('mongodb');

module.exports = {
    getUsersGames, 
    updateUsersGame,
    deleteUsersGame,
};

async function getUsersGames(req, res) {
    const usersGames = await userGame.getAll({user:req.user._id});
    res.json(usersGames);
}

async function updateUsersGame(req, res) {
    console.log('contrller userGame.js request body: ', req.body)
    req.body._id ||= ObjectId() // if no userGame ID, create new one for upsert
    console.log('contrller userGame.js request body: ', req.body)
    // const usersGame = await userGame.findOneAndUpdate({user:req.body._id}, req.body, { upsert: true, new: true });
    const usersGame = await userGame.findOneAndUpdate({_id:req.body._id }, req.body, { upsert: true, new: true });
    console.log('usersGame: ',usersGame)
    res.json(usersGame);
}

function deleteUsersGame(req, res) {
    // console.log('contrller userGame.js request body: ', req.body)
    // const profile = await Profile.findOneAndUpdate({user:req.user._id}, req.body, {new:true}).exec();
    // const usersGame = await userGame.findOneAndUpdate({user:req.body.game._id}, req.body);
    // console.log('usersGame: ',usersGame)
    // res.json(profile);
}
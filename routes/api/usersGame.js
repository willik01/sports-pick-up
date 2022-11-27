const express = require('express')
const router = express.Router()
const usersGameCtrl = require('../../controllers/api/usersGame')

// GET /api/profile
router.get('/', usersGameCtrl.getUsersGames)
router.get('/gameenums', usersGameCtrl.getUserGameEnums)
router.get('/skillenums', usersGameCtrl.getSkillLevelEnums)
router.post('/save', usersGameCtrl.updateUsersGame);
router.delete('/delete', usersGameCtrl.deleteUsersGame);


// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router
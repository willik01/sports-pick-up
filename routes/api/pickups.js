const express = require('express')
const router = express.Router()
const pickupsCtrl = require('../../controllers/api/pickups')

// GET /api/profile
router.get('/', pickupsCtrl.getAllPickups)
// router.get('/gameenums', usersGameCtrl.getUserGameEnums)
// router.get('/skillenums', usersGameCtrl.getSkillLevelEnums)
router.post('/save', pickupsCtrl.updatePickup);
// router.delete('/delete', usersGameCtrl.deleteUsersGame);


// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router
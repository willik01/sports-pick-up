const express = require('express')
const router = express.Router()
const profilesCtrl = require('../../controllers/api/profiles')
// const usersCtrl = require('../../controllers/api/users');
// const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/profile
router.get('/', profilesCtrl.getProfile);
// router.post('/', profilesCtrl.saveProfile)

// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router
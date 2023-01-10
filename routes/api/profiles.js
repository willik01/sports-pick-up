const express = require('express')
const router = express.Router()
const profilesCtrl = require('../../controllers/api/profiles')
// const usersCtrl = require('../../controllers/api/users');
// const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/profile
router.get('/', profilesCtrl.getProfile);
router.post('/', profilesCtrl.saveProfile);
// GET /api/profile/:id
router.get('/:id', profilesCtrl.getPUOwnerProfile);

module.exports = router
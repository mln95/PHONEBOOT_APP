const express = require('express')
const router = express.Router()

const services = require('../services/services')
const controllers = require('../controllers/controllers')

router.get('/', services.homeRoutes)
router.get('/updatecontact', services.updateContactRoutes)
router.get('/addcontact', services.addContactRoutes)

router.get('/api/v1/contact',controllers.getAllContact)
router.post('/api/v1/contact',controllers.createContact)
// router.get('/api/v1/contact/:id',controllers.getContact)
router.patch('/api/v1/contact/:id',controllers.updateContact)
router.delete('/api/v1/contact/:id',controllers.deleteContact)

module.exports = router
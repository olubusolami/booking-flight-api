const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');


router.get('/', controller.Flights);

router.post('/api/v1/flights', controller.addFlight);

router.get('/api/v1/flights', controller.listFlights);

router.get('/api/v1/flights/:id', controller.getAFlight)

router.put('/api/v1/flights/:id', controller.editAFlight)

router.delete('/api/v1/flights/:id', controller.deleteAFlight)


module.exports = router;

const router = require('express').Router();

const patientController = require('../controllers/patientController');

router.get('/', patientController.list);
router.post('/add', patientController.save);
router.get('/update/:id', patientController.edit);
router.post('/update/:id', patientController.update);
router.get('/delete/:id', patientController.delete);

module.exports = router;

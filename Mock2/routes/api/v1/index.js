const express = require('express');
const router = express.Router();

const doctorController = require('../../../contollers/doctorsController');
const patientController = require('../../../contollers/patientController');
const reportController = require('../../../contollers/reportController');
//routes for doctors
router.post('/doctors/register',doctorController.addDoctor);
router.post('/doctors/login',doctorController.login);
router.get('/doctors/log',doctorController.log);
//routes for patients
router.get('/patients/createPatient',patientController.homePage);
router.post('/patients/register',patientController.registerPatient);

//routes for reports
router.post('/patients/:id/create_report',reportController.createReport);
router.get('/patients/:id/all_reports',reportController.getReports);
router.get('/reports/:status',reportController.filterReport);
module.exports = router;
Getting started

To get the Node server running locally:

Clone this repo
npm install to install all required dependencies
Install MongoDB
Change the enviroment variables in config folder as required
npm run start the local server

Application Structure
index.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

config/ - This folder contains configuration for mongodb.

routes/ - This folder contains the route definitions for our API.

models/ - This folder contains the schema definitions for our Mongoose models.

controllers/ - This folder contains the actions to be performed on the routes.


API

API to register a doctor
URL [POST]: /api/v1/doctors/register

API to login doctor and get JWT token
URL[POST]://api/v1/doctors/login

API to register a patient
URL [POST]: /api/v1/register_patient

API to create a report
URL [POST]: /api/v1/patients/:id/create_report


API to fetch all reports of a patient
URL [GET]: /api/v1/patients/:id/all_reports

 
API to fetch all reports based on status
URL [GET]: /api/v1/reports/:status


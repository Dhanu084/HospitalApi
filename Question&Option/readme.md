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

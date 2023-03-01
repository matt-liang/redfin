# redfin

## Requirements
To run this project requires NodeJS and npm installed on your machine.

## Quick Start
Pull the local files to your machine. 

Navigate to the server folder and run ```$ npm start``` in terminal.

Navigate to the client folder and run ```$ npm start``` in terminal.

The client will be running on ```localhost:3000```

## Descriptions
This project was created using React and NodeJs with Express.

The server folder contains a redfin csv file which is parsed into an array of objects and stored in server memory.
Ideally, I would parse and insert this data into a database. 

A single GET endpoint is configured on the backend which is called anytime the search bar is updated on the front end.
The endpoint checks the end of the URL for the search value sent by client. 
The endpoint then matches this value with stored address / zipcodes and responds with a filtered array of objects to client. 
The client then paints the response.

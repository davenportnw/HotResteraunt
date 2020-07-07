//Create server

const express = require('express');

const port = 3000;
const app = express();

app.listen(port, function() {
    console.log("Listening at PORT " + port);
});

<<<<<<< HEAD
=======
//Reservation Questions

>>>>>>> fd29693398d812b7165d304e7f632998e01318b1
const reserved = []

const waiting = []

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    //directs tp the home page
    app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  //directs to the reservation page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  //directs to the tables page
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

});

<<<<<<< HEAD


=======
>>>>>>> fd29693398d812b7165d304e7f632998e01318b1

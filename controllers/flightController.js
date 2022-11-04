const models = require("../models/Flight");
const { v4: uuidv4 } = require("uuid");

// This just hits the base url and just instruct you on what to do
exports.Flights = (req, res) => {
  return res
    .status(200)
    .send(
      "Welcome to Olúbùsọ́lá Airways ✈️,showing you APIs for booking flight. To view the list of flights, add, edit and delete flight details. Fly safe ✈️✈️✈️"
    );
};

// POST request to add a flight
exports.addFlight = (req, res) => {
  const flight = req.body;

  let flights = models.exampleModel;
  flights.push({ id: uuidv4(), ...flight }); // uuidv4 gives it a unique id

  res.send(`A new Flight has been added to the database!`);
};

//GET reqest to fetch all flight details
exports.listFlights = (req, res) => {
    let flights = models.exampleModel;
    res.send({ flights });
  };

//GET reqest to fetch a flight details
exports.getAFlight = (req, res) => {
  const { id } = req.params;
  let flights = models.exampleModel;
  const foundFlight = flights.find((flight) => flight.id === id);
  res.send(foundFlight);
};

//PUT request
exports.editAFlight = (req, res) => {
    const { id } = req.params;
    const { title, time, Price, date } = req.body;
    let flights = models.exampleModel;
    let flightUpdate = flights.find((flight) => flight.id === id);
    if (title) flightUpdate.title = title;
    if (time) flightUpdate.time = time;
    if (Price) flightUpdate.Price = Price;
    if (date) flightUpdate.date = date;
  
    res.send(`User/Passenger with the ${id} has been updated successfully`);
  };

//DELETE request to delete a single flight
exports.deleteAFlight = (req, res) => {
  const { id } = req.params;

  let flights = models.exampleModel;

  deleteFlights = flights.filter((flight) => flight.id !== id);
  res.send(`Flight with the id ${id} is deleted from the database.`);
};



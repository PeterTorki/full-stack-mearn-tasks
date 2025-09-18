const { FlightTicket } = require("./flight.module");

const ticket2 = new FlightTicket("FL456", "Chicago", "Miami", "2023-11-20");

FlightTicket.display();

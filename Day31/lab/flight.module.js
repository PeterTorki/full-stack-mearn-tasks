class FlightTicket {
  constructor(flightNum, departureFrom, departureTo, travelingDate) {
    this.seatNum = FlightTicket.#allTickets.length + 1;
    this.flightNum = flightNum;
    this.departureFrom = departureFrom;
    this.departureTo = departureTo;
    this.travelingDate = travelingDate;
    FlightTicket.#allTickets.push({
      seatNum: this.seatNum,
      flightNum,
      departureFrom,
      departureTo,
      travelingDate,
    });
  }

  update = ({ key, value }) => {
    this[key] = value;
    FlightTicket.#allTickets[this.seatNum - 1][key] = value;
  };

  get = () => {
    return `Seat Number: ${this.seatNum}, Flight Number: ${this.flightNum}, Departure From: ${this.departureFrom}, Departure To: ${this.departureTo}, Traveling Date: ${this.travelingDate}`;
  };

  static #allTickets = [];
  static display = () => {
    FlightTicket.#allTickets.forEach((ticket) => console.log(ticket));
  };
}

module.exports = {
  FlightTicket,
};

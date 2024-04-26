const Airport = require("./Airport");

class Plane {

    constructor(company, destination) {
        this.company = company;
        this.destination = destination
        this.origin = Airport.airportCode;
        this.passengers = [];
    }

    addPassenger(passenger) {
        this.passengers.push(passenger)
    }

    getPassengers(){
        return this.passengers
    }
}


module.exports = Plane;
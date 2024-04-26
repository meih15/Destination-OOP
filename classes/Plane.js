class Plane {

    constructor(company, origin, destination) {
        this.company = company;
        this.origin = origin;
        this.destination = destination
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
class Airport {

    constructor(name, airportCode) {
        this.name = name;
        this.airportCode = airportCode
        this.planes = [];
    }

    getPlanes() {
        return this.planes
    }

    addPlane(plane) {
        this.planes.push(plane)
    }

}


module.exports = Airport;
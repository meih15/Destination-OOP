const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');
const Airport = require('../../classes/Airport')

describe("Plane Class Tests", () => {
    let plane 
    let airport

    beforeEach(() => {
        plane = new Plane("JetBlue", "Japan")
        airport = new Airport("JFK", "JFK")
        plane.origin = airport.airportCode
    })

    test("Constructor should properly initialize properties", () => {
        expect(plane.company).toBe("JetBlue");
        expect(plane.origin).toBe("JFK");        expect(plane.destination).toBe("Japan");
        expect(plane.passengers).toEqual([]);
    });

    test("Properties should have the correct Data Type", () => {
        expect(typeof plane.company).toBe("string")
        expect(typeof plane.origin).toBe("string")
        expect(typeof plane.destination).toBe("string")
        expect(Array.isArray(plane.passengers)).toBe(true);
    })


    test("addPassenger() adds a passenger to the 'passengers' array", () => {
        let passenger = new Person("Tyler", "Japan");
        plane.addPassenger(passenger);
        expect(plane.passengers).toEqual([passenger]);
    });

    test("getPassengers() returns the array of 'passengers'", () => {
        let passenger1 = new Person("Bijan", "Chicago");
        let passenger2 = new Person("Ben", "Las Vegas");
        plane.addPassenger(passenger1);
        plane.addPassenger(passenger2);
        const passengers = plane.getPassengers();
        expect(passengers).toEqual([passenger1, passenger2]);
    });
})
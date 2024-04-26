const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane')

describe("Airport Class Tests", () => {
    let airport

    beforeEach(() => {
        airport = new Airport("name", "airportCode")
    })

    test("Constructor should properly initialize properties", () => {
        expect(airport.name).toBe("name");
        expect(airport.airportCode).toBe("airportCode");
        expect(airport.planes).toEqual([]);
    });


    test("Properties should have the correct Data Type", () => {
        expect(typeof airport.name).toBe("string")
        expect(typeof airport.airportCode).toBe("string")
        expect(Array.isArray(airport.planes)).toBe(true);
    });


    test("addPlane() adds a plane to the 'planes' array", () => {
        let plane = new Plane("JetBlue", "OriginAirportCode", "Japan") 
        airport.addPlane(plane);
        expect(airport.planes).toEqual([plane]);
    });

    test("getPlanes() returns the array of 'planes'", () => {
        let plane1 = new Plane("JetBlue", "OriginAirportCode", "Japan");
        let plane2 = new Plane("Delta", "OriginAirportCode1", "Banff");
        airport.addPlane(plane1);
        airport.addPlane(plane2);
        const planes = airport.getPlanes();
        expect(planes).toEqual([plane1, plane2]);
    });

})
const Bag = require('../../classes/Bag');

describe("Bag Class Tests", ()=> {
    let bag

    beforeEach(() => {
        bag = new Bag(88, 2);
    })

    test("Constructor should properly initialize properties", () => {
        expect(bag.weight).toBe(88)
        expect(bag.id).toBe(2)
        expect(bag.owner).toBe(null)
    })

    test("Properties should have the correct Data Type", () => {
        expect(typeof bag.weight).toBe("number")
        expect(typeof bag.id).toBe("number")
        expect(typeof bag.owner === "string" || bag.owner === null).toBe(true);
    })

    test("getOwner() should return the initial owner", ()=> {
        console.log("Owner:", bag.owner)
        expect(bag.getOwner()).toBe(null)
    })

    test("assignOwner() should update owner with a 'Person' assigned to a 'Bag'", ()=> {
        console.log("Owner - before", bag.owner)
        bag.assignOwner('Mei')
        console.log("Owner - after", bag.owner)
        expect(bag.owner).toBe('Mei')
    })


})
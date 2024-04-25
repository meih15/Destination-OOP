const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag')

describe("Person Class Tests", () => {
    let person

    beforeEach(() => {
        person = new Person("Tyler", "Japan");
    })

    test("Constructor should properly initialize properties", () => {
        expect(person.name).toBe("Tyler")
        expect(person.destination).toBe("Japan")
        expect(person.bags).toEqual([])
    })


    test("Properties should have the correct Data Type", () => {
        expect(typeof person.name).toBe("string")
        expect(typeof person.destination).toBe("string")
        expect(Array.isArray(person.bags)).toBe(true);
    })

    test("addBag() adds a bag to the 'bags' array", ()=> {
        console.log("Bags - before", person.bags)

        let bag = new Bag(10, 3)
        person.addBag(bag);

        console.log("Bags - after", person.bags)
        expect(person.bags).toEqual([bag])
    })


    test("getBags() returns the array of 'bags'", () =>{
        let person1 = new Person("Mei", "Banff")
        let bag1 = new Bag(10, 3);
        let bag2 = new Bag(5, 2);
        
        console.log("bags - before", person1.bags)
        person1.addBag(bag1);
        person1.addBag(bag2);
    
        console.log("bags - after", person1.bags)
        const bags = person1.getBags();
        expect(bags).toEqual([bag1, bag2]);

    })
})
const ConstantLengthList = require("./list-util")

describe("ConstantLengthList", () => {

    let theList

    beforeEach(() => {
        theList = new ConstantLengthList(3)
    })

    test("can be initialised", () => {
        expect(theList.items).toEqual([])
    })

    test("can be stringified", () => {
        const data = {
            test: theList.append(1) 
        }
        
        expect(JSON.stringify(data)).toEqual('{"test":[1]}')
    })

    test("keeps max length", () => {
        theList.append(1)
        theList.append(2)
        theList.append(3)
        theList.append(4)

        expect(theList.items.length).toEqual(3)
        expect(theList.items).toEqual[2,3,4]
    })

    describe("Pre Population", () => {

        test("can be pre-populated", () => {
            const list = new ConstantLengthList(3, [1,2,3])
    
            expect(list.items).toEqual([1,2,3])
        })
    
        test("handles pre-population over size", () => {
            const list = new ConstantLengthList(1, [1,2,3])
            expect(list.items).toEqual([3])
        })

    })

    describe("Average", () => {

        test("is calculated", () => {
            theList.append(1)
            expect(theList.avg()).toEqual(1)
    
            theList.append(2)
            expect(theList.avg()).toEqual(1.5)
        })
    
        test("handles empty list", () => {
            expect(theList.avg()).toBeUndefined()
        })

    })

})
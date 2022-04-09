const reduce = require("./reduce-fns")

describe("basic behaviour", () => {

    test("default state", () => {
        expect(reduce(undefined, {})).toEqual({})
    })
    
    test("if no handler", () => {
        const anyEvent = { abc: "def" }
        const state = { test: "abc"}
    
        expect(reduce(state, anyEvent)).toEqual(state)
    })

})

describe("Vitocal Events", () => {
    test("Records Temperature", () => {
        const event = { device: "vitocal", temp_au: 10}

        expect(reduce(undefined, event).temp_au).toEqual(10)
    })

})

describe("Inverter Events", () => {
    test("Records Total DC", () => {
        const event = { device: "inverter", power_dc1: 10, power_dc2: 5}
    
        expect(reduce(undefined, event).dc_roof).toEqual(15)
    })

    test("Records last5", () => {
        let state = {}
        for(x of Array(10).keys()) {
            state = reduce(state, { device: "inverter", power_dc1: x, power_dc2: x})
        }

        expect(state.dc5).toEqual([10,12,14,16,18])
    })

    test("Records gliding average", () => {
        let state = {}
        for(x of Array(10).keys()) {
            state = reduce(state, { device: "inverter", power_dc1: x, power_dc2: x})
            console.log(state)
        }

        expect(state.avg5).toEqual([6,8,10,12,14])
    })
})

const reduce = require("./reduce-fns")

describe("basic behaviour", () => {

    test("default state", () => {
        expect(reduce({})).toEqual({})
    })
    
    test("if no handler", () => {
        const anyEvent = { abc: "def" }
        const state = { test: "abc"}
    
        expect(reduce(anyEvent, state)).toEqual(state)
    })

})

describe("Vitocal Events", () => {
    test("Records Temperature", () => {
        const event = { device: "vitocal", temp_au: 10}

        expect(reduce(event)).toEqual({ temp_au: 10 })
    })

})

describe("Inverter Events", () => {
    test("Records Total DC", () => {
        const event = { device: "inverter", power_dc1: 10, power_dc2: 5}
    
        expect(reduce(event)).toEqual({ dc_roof: 15})
    })
})

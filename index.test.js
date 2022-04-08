const index = require("./index")

// mock aws API
const aws = require("aws-sdk")
jest.mock('aws-sdk', () => ({
    S3: function () {
        this.currentState = {}

        this.getObject = function(params, callback) {
            callback(null, { Body: JSON.stringify(this.currentState) })
        }

        this.putObject = function(params, callback) {
            callback(null, JSON.parse(params.Body))
        }
    }
}));

describe("AWS Lamdba Calls", () => {
    test("Returns what is returned by PutObject", async () => {
        const result = await index.handler({ "device": "inverter" }) 
        expect(result).toEqual({dc_roof: null})
    })
})
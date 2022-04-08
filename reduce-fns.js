
const reduce = (event, state = {}) => {
    switch(event.device) {
        case "vitocal":
            return { ...state, temp_au: event.temp_au }
        case "inverter":
            return { ...state, dc_roof: event.power_dc1 + event.power_dc2 }
        default:
            return state
    }
}

module.exports = reduce
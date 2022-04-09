const lwcl = require("./list-util")

const reduce = (state = {}, event) => {
    switch(event.device) {
        case "vitocal":
            return { ...state, temp_au: event.temp_au }
        case "inverter":
            const dcRoof = event.power_dc1 + event.power_dc2

            const dc5 = new lwcl(5, state.dc5)
            const avg5 = new lwcl(5, state.avg5)
            
            dc5.append(dcRoof)
            avg5.append(dc5.avg())

            return { ...state, dc_roof: dcRoof, dc5: dc5.items, avg5: avg5.items }
        case "reset":
            return {}
        default:
            return state
    }
}

module.exports = reduce
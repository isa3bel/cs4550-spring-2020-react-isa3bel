
const initialState = {
    modules: [
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }
            
        default:
            return state
    }
}

export default moduleReducer
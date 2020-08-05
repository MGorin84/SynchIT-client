export default function (state, action) {
    switch(action.type) {
        case "setMemberData": {
            return {
                ...state,
                memberData: action.data
            }
        }
        case "setAvailability": {
            return {
                ...state,
                memberData: {...state.memberData, availability:action.data}
            }
        }
        
        case "setLoggedInUser": {
            return {
            ...state,
            loggedInUser: action.data
            }
        }


        default: 
            return state
    }
}
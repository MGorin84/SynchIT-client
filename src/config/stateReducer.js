export default function (state, action) {
    switch(action.type) {
        case "setMemberData": {
            return {
                ...state,
                memberData: action.data
            }
        }
        default: 
            return state
    }
}
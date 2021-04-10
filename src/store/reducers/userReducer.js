const INITIAL_STATE = {
    users: [],
    loggedinUser: null
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'LOGIN':
            return {
                ...state,
                loggedinUser: action.user
            }
        case 'SIGNUP':
            return {
                ...state,
                users: [...state.users, action.user],
                loggedinUser: action.user
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedinUser: null
            }
        default:
            return state
    }
}
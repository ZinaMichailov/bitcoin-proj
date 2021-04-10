import { userService } from "../../services/userService"

export function loadUsers() {
    return async dispatch => {
        const users = await userService.getUsers()
        dispatch({ type: 'SET_USERS', users })
    }
}

export function login(userCred) {
    return async dispatch => {
        await userService.login(userCred)
        const user = await userService.getLoggedInUser()
        dispatch({ type: 'LOGIN', user })
    }
}

export function signup(userCred) {
    return async dispatch => {
        const user = await userService.signup(userCred)
        dispatch({ type: 'SIGNUP', user })
    }
}

export function logout() {
    return async dispatch => {
        await userService.logout()
        dispatch({ type: 'LOGOUT'})
    }
}

export function addMove(contact, amount) {
    return async dispatch => {
        const user = await userService.addMove(contact, amount)
        dispatch({ type: 'ADD_MOVE', user})
    }
}
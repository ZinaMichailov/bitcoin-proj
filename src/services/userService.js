import { storageService } from "./storageService";

export const userService = {
    getUser,
    login,
    signup,
    logout,
    addMove,
    getLoggedInUser,
    getEmptySingUpCred
}

const users = [
    {
        name: 'Puki Ben David',
        email: 'puki@gmail.com',
        password: '1234',
        coins: 100,
        moves: []
    }
]

const USER_KEY = 'userDB'
let gUsers = storageService.load(USER_KEY)
if (!gUsers || !gUsers.length) gUsers = storageService.store(USER_KEY, users);


function getUser() {
    const userCopy = JSON.parse(JSON.stringify(users[0]))
    return Promise.resolve(userCopy)
}

function login(userCred) {
    const user = gUsers.find(user => user.email === userCred.email && user.password === userCred.password)
    return _saveLocalUser(user)
}

function logout() {
    sessionStorage.clear()
}

function signup(signupCred) {
    gUsers.push(signupCred)
    storageService.store(USER_KEY, gUsers)
    return _saveLocalUser(signupCred)
}

function getEmptySingUpCred() {
    return {
        name: '',
        email: '',
        password: '',
        coins: 0,
        moves: []
    }
}

function addMove(contact, amount) {
    const loggedinUser = getLoggedInUser();
    let userIdx = gUsers.findIndex(user => user.email === loggedinUser.email)
    let move = getEmptyUserMove()
    move.toId = contact._id
    move.to = contact.name
    move.amount = amount
    gUsers[userIdx].moves.push(move)
    storageService.store(USER_KEY, gUsers);
}

function getEmptyUserMove() {
    return {
        toId: '',
        to: '',
        at: Date.now(),
        amount: ''
    }
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(('loggedinUser') || 'null'))
}
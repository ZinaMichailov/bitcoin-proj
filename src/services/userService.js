import { storageService } from "./storageService";

export const userService = {
    getUser,
    getUsers,
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
        moves: [
            {
                toId: '5a56640269f443a5d64b32ca',
                to: 'Ochoa Hyde',
                at: 1618056214923,
                amount: 20
            }
        ]
    }
]

const USER_KEY = 'userDB'
let gUsers = storageService.load(USER_KEY)
if (!gUsers || !gUsers.length) gUsers = storageService.store(USER_KEY, users);


function getUser() {
    const userCopy = JSON.parse(JSON.stringify(users[0]))
    return Promise.resolve(userCopy)
}

async function getUsers() {
    return gUsers
}

function login(loginCred) {
    const user = gUsers.find(user => user.email === loginCred.email && user.password === loginCred.password)
    return _saveLocalUser(user)
}

function logout() {
    sessionStorage.clear()
}

function signup(signupCred) {
    signupCred.coins = 100
    signupCred.moves = []
    gUsers.push(signupCred)
    storageService.store(USER_KEY, gUsers)
    return _saveLocalUser(signupCred)
}

function getEmptySingUpCred() {
    return {
        name: '',
        email: '',
        password: '',
        coins: 100,
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
    gUsers[userIdx].coins -= amount
    storageService.store(USER_KEY, gUsers)
    return gUsers[userIdx]
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
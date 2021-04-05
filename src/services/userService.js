export const userService = {
    getUser
}

const user = {
    name: 'Puki Ben David',
    coins: 100,
    moves: []
}

function getUser() {
    const userCopy = JSON.parse(JSON.stringify(user))
    return Promise.resolve(userCopy)
}
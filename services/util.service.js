export function makeId(length = 6) {
    var title = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        title += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return title
}

<<<<<<< HEAD
export function getRandomIntInclusive(min, max) {
=======
function getRandomIntInclusive(min, max) {
>>>>>>> 91c56d9f990f5cb32f7b684a602a6d6ef61aabe3
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}


export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}
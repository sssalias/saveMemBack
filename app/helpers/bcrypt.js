import bcrypt from 'bcrypt'

const saltRounds = 10

export const generateHash = (password) => {
    return bcrypt.hash(password, saltRounds)
}

export const checkHashes = (passowrd, hash) => {
    return bcrypt.compare(passowrd, hash)
}
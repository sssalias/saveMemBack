import jwt from 'jsonwebtoken'
export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.KEY)
}
export const getUserId = (token) => {
    return jwt.decode(token).user.id
}
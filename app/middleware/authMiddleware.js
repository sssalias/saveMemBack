import jwt from 'jsonwebtoken'
export const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTION') {
        next()
    }
    
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({msg: 'User is not auth'})
        }
        const decodedData = jwt.decode(token, process.env.KEY)
        // console.log(decodedData)
        req.user = decodedData
        next()
    } catch (err) {
        console.log(err)
        return res.status(200).json({msg: 'User is not auth'})
    }
}
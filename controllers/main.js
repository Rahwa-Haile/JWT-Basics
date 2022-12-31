const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = (req, res)=>{
    const { username, password } = req.body 
    if(!username || !password){
        throw new CustomAPIError('Please provide your email and password', 400)
    }
    
    const id = new Date().getDate()
    
    const token = jwt.sign({username, id}, process.env.JWT_SECRET, {expiresIn: '30d'})
   
    res.status(200).json({msg: 'user created, ', token})
}

const dashboard = async (req, res)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token present', 401)
    }
    
    const token = authHeader.split(' ')[1]
    
    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        
        const luckyNumber = (Math.floor(Math.random() * 100))
        res.status(200).json({msg: `Hello ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
    }
    catch(error){
        throw new CustomAPIError('Not authorized to access this route', 401)
    }

}

module.exports = { login, dashboard } 
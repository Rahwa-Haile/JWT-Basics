const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const { BadRequest } = require('../errors')

const login = (req, res)=>{
    const { username, password } = req.body 
    if(!username || !password){
        throw new BadRequest('Please provide your email and password')
    }
    
    const id = new Date().getDate()
    
    const token = jwt.sign({username, id}, process.env.JWT_SECRET, {expiresIn: '30d'})
   
    res.status(200).json({msg: 'user created, ', token})
}

const dashboard = async (req, res)=>{
    
    const luckyNumber = (Math.floor(Math.random() * 100))
    res.status(200).json({msg: `Hello ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

}

module.exports = { login, dashboard } 
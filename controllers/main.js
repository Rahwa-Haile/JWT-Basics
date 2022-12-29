const CustomAPIError = require('../errors/custom-error')

const login = (req, res)=>{
    const { username, password } = req.body 
    if(!username || !password){
        throw new CustomAPIError('Please provide your email and password', 400)
    }
    console.log(username, password)
    res.send('fake register/login/signup route')
}

const dashboard = async (req, res)=>{
    const luckyNumber = (Math.floor(Math.random() * 100))
    res.status(200).json({msg: `Hello Rahwa Yohannes`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = { login, dashboard }
const CustomAPIError  = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req, res, next)=>{
    if(err instanceof CustomAPIError){
        res.status(err.statusCode).json({ msg: err.message })
    }
    res.status(500).send('Something is wrong, please try again later')
}

module.exports = errorHandlerMiddleware
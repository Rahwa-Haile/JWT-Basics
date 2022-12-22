class CustomAPIError extends Error{
    constructor(message, statusCode){
    super(message)
    statusCode = this.statusCode
}
}

const createCustomAPIError = (msg, statusCode)=>{
    const newError = new CustomAPIError(msg, statusCode)
}

module.exports = { CustomAPIError, createCustomAPIError }


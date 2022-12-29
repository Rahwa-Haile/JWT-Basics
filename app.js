require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const notFound = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware')
const mainRouter = require('./routes/main')


//middleware
app.use(express.json())

app.use('/api/v3', mainRouter)

app.use(express.static('./public'))
 
app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000

const start = async ()=> {
    try {
        await app.listen(port, ()=> console.log(`app is running on port ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}

start()
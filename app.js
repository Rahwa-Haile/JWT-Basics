require('dotenv').config()
const express = require('express')
const app = express()
const notFound = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware')

app.use(express.static('./public'))
app.use(express.json())
 
app.use(notFound)
app.use(errorHandlerMiddleware)




const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})
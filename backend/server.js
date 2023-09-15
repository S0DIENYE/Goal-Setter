const express = require('express')
const dotenv = require('dotenv').config()
const  { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// using middleware (body)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// direct endpoint to file
app.use('/api/goals', require('./routes/goalRoutes'))

// override default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
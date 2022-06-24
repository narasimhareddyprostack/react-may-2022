const express = require('express')
const app = express()
const morgan = require('morgan')

const taskRouter = require('./router/taskRouter')

require('./model/db')
app.use(morgan("tiny"));

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.send('Hello World!'))

app.use('/task/', taskRouter);

//business login 
app.listen(8080, (err, data) => {
    console.log(`Server is Running on ${8080}`)
})
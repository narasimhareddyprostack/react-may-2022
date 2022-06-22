const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
//business login 
app.listen(8080, (err, data) => {
    console.log(`Server is Running on ${8080}`)
})
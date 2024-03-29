const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

PORT = 3000
const api = require('./routes/api')
const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/api', api)
app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, (req, res) => {
    console.log('Server running on localhost: ' + PORT);
})

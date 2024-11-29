const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(5000, () => {
    console.log('API Cantina composição executando em http://localhost:5000')
})
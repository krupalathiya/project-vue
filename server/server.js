const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
    origin: 'http://localhost:8081'
}
app.use(cors(corsOption))
//models
const db = require('./app/models')
//sequelize
db.connex.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//test
app.get('/',(req, res) => {
    res.json({message: 'welcome'})
})
//route
require('./app/routes/product.route')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
})
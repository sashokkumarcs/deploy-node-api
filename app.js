const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 4200

app.use(express.static('public'))

app.use(cors())
// Set EJS as the view engine for express
app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', (req, res)=>{
    res.render('index' , {title: "EJS Demo App"})
})

app.get('/about', (req, res)=>{
    res.render('about', {title: "EJS Demo App"})
})

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`))

const express = require('express')
const app = express()

const port = process.env.PORT || 4200

app.get('/', (req, res)=>{
    res.send("This is home page")
})

app.get('/about', (req, res)=>{
    res.send('This is about page')
})

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`))

const express = require('express')
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;
// Middleware
const logger = (req,res,next)=>{
    console.log('hello')
    next()
}
app.use(logger)

app.use(express.static(__dirname + '/public'))

// gets all members
app.get('/api/members',async(req,res)=>{
    const members = await fetch('https://api.github.com/users')
    const data = await members.json()
    res.json(data)
})



app.listen(PORT,()=>{
    console.log('connected....')
})
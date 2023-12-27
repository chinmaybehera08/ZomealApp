const express = require('express')
const conn = require('mysql2')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const db = conn.createConnection({
 user:"",
 password:"",
 host:"",
 databases:""
})
app.use(express.json())
app.get('/api/Users',(req,res)=>{
 res.json({databases})
})

app.listen(PORT,()=>{
    console.log('Express Connected')
})

const express = require('express')
const userRouter = express.Router()
userRouter.get('/getusers',(req,res)=>{
 res.send('Api working')
})
userRouter.post('/createusers',(req,res)=>{
res.status(200).send('createusers')
})
userRouter.put('/putusers',(req,res)=>{
res.status(200).send('putusers')
})
userRouter.delete('/deleteusers',(req,res)=>{
    res.status(200).send('deleteusers')
})
 module.exports = userRouter
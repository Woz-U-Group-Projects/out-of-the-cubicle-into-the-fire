const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const db = 'mongodb://admin:password1@ds351987.mlab.com:51987/speedy'
const jwt = require('jsonwebtoken')


mongoose.connect(db, err =>{
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
}) 

router.get('/', (req, res) => {
    res.send('From API')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registerUser) => {
        if (err) {
            console.log(err)
        } else {
            let payload = {subject: registerUser._id}
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = {subject: user._id}
                let token = jwt.sign(payload, 'secretkey')
                res.status(200).send({token})
            }
        }
    })
})


module.exports = router;
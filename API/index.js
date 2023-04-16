require('dotenv').config()

const express = require('express')
var cors = require('cors');
const session = require('express-session');

const passport = require('passport')

const app = express()

require('./passport-setup')

app.set("view engine", 'ejs')
app.use(session({ secret: 'melody hensley is my spirit animal' }));

app.use(passport.initialize())

app.use(passport.session())

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/success',(req,res)=>{
    res.render('pages/profile')
})

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }) ,(req, res) => {

})

app.get('/google/callback', passport.authenticate('google', { failureRedirect:'/failed'}), (req, res) => {
 res.redirect('./success')
})

app.listen(5000, () => {
    console.log("App is running on port 5000")
})
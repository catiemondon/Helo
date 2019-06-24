require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive= require('massive')
const auth_ctrl= require('./controllers/authController')

const app= express()



const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())


app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*60
    }
}))

massive(CONNECTION_STRING).then((database)=>{
    app.set('db', database)
    console.log('DB is 100% that biiih')
})


app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} points to griffindor`))
let express = require("express")
let bodyParser = require('body-parser')
let session = require('express-session')
const multer = require('multer')
const nodemailer = require('nodemailer')
const app = express()
const upload = multer()

const createViewModel = require('./models/email');

app.set('view engine', 'ejs') 

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 

app.use(session({
    secret: 'skofild-full@',  
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false} 
}))

app.use('/', createViewModel)

app.get('/',(req, res)=> {
    res.redirect('accueil')
})
app.get('/accueil',(req, res)=> {
    res.render('index')
})

app.get('/contact',(req, res) => {
    res.render('contact')
})

app.get('/submit',(req, res) => {
    res.render('submit')
})

app.get('/form.html',(req, res)=> {
    res.render('form')
})

app.get('/about.html',(req, res)=> {
    res.render('about')
})

app.get('/donate.html',(req, res)=> {
    res.render('donate')
})

app.get('/mission.html',(req, res)=> {
    res.render('mission')
})

app.get('/news.html',(req, res)=> {
    res.render('news')
})
app.use((req, res) => {
    res.status(404).send('Error of page !!')
})

app.listen(3000, () => {
    console.log(
        'Server listen on port 3000'
    )
})
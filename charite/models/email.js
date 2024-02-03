const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post("/sendMail", (req, res) => {
    const rubrique = req.body.rubrique
    const { name, email, phone, message} = req.body
    let know

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'simbingangu@gmail.com',
        pass: 'hgwyxexypdncvefj'
    },
    tls: {
        rejectUnauthorized: false
      }
})

know = "Full name : " + name + "\n" + "Email : " + email + "\n" + "Phone : " + phone + "\n" + "Message : " + message + "\n"

const mailOptions = {
    from: 'simbingangu@gmail.com',
    to: email,
    subject: 'MZH<notification>',
    text: 'Thank you for sending us your message, our team we\'ll get back to you. \nBest regard Mountain of zion hospitality'

}

const mailOptions2 = {
    from: 'simbingangu@gmail.com',
    to: 'simbingangu@gmail.com',
    subject: 'MZH<acknowledgement of receipt>',
    text: know
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('you win nice')
    }
})

transporter.sendMail(mailOptions2, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('you win nice')
    }
})

res.redirect('/accueil')

})

router.post("/sendMail2", (req, res) => {
    const rubrique = req.body.rubrique
    const { name, email, job, country, address, phone, Massage} = req.body
    let know

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'simbingangu@gmail.com',
        pass: 'hgwyxexypdncvefj'
    },
    tls: {
        rejectUnauthorized: false
      }
})

know = "Name : " + name + "\n" + "Email : " + email + "\n" + "Job : " + job + "\n" + "Country : " + country + "\n"+ "Address : " + address  + "\n" + "Phone : " + phone + "\n" + "Massage : " + Massage + "\n"

const mailOptions = {
    from: 'simbingangu@gmail.com',
    to: email,
    subject: 'MZH<notification>',
    text: 'Thank you for sending us your message, our team we\'ll get back to you. \nBest regard Mountain of zion hospitality'

}

const mailOptions2 = {
    from: 'simbingangu@gmail.com',
    to: 'simbingangu@gmail.com',
    subject: 'MZH<acknowledgement of receipt>',
    text: know
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('you win nice')
    }
})

transporter.sendMail(mailOptions2, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('you win nice')
    }
})

res.redirect('/accueil')

})

module.exports = router
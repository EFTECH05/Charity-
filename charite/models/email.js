const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post("/sendMail", (req, res) => {  // contact Form
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
    subject: 'AZIZA <NOTIFICATION>',
    text: 'Thank you for sending us your message, our team we\'ll get back to you. \nBest regard AZIZA'

}

const mailOptions2 = {  // Main Form
    from: 'simbingangu@gmail.com',
    to: 'simbingangu@gmail.com',
    subject: 'AZIZA <ACKNOWLEDGEMENT OF RECEIPT>',
    text: know
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('Massage sent successful !!!')
    }
})

transporter.sendMail(mailOptions2, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('Massage sent successful !!!')
    }
})

res.redirect('/submit')

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
    subject: 'AZIZA <NOTIFICATION>',
    text: 'Thank you for sending us your message, our team we\'ll get back to you. \nBest regard AZIZA'

}

const mailOptions2 = {
    from: 'simbingangu@gmail.com',
    to: 'simbingangu@gmail.com',
    subject: 'AZIZA <ACKNOWLEDGEMENT OF RECEIPT',
    text: know
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('Massage sent successful !!!')
    }
})

transporter.sendMail(mailOptions2, (error, info) => {
    if (error){
        console.log(error)
    } else {
        console.log('Massage sent successful !!!')
    }
})

res.redirect('/submit')

})

module.exports = router
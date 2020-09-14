const nodemailer = require("nodemailer");
const mailGun= require("nodemailer-mailgun-transport");

const auth = {
    auth:{
        api_key: "129ec3666e48c1fcc8226f36a25fb3f2-e566273b-a759ea8c",
        domain: "sandbox77b9ec6d806b4664b4cf1762b7e73769.mailgun.org"
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, name, text, cb) => {

    const mailOptions = {
        from: email,
        to: "anikwe.test@gmail.com",
        name: name,
        text: text
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })

}

module.exports = sendMail;

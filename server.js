const express = require("express");
const app = express();
require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require("path");
const log = console.log;

const PORT = 8080;

// Data parsing
app.use(bodyParser.urlencoded({extended: true}));

//Static Folder
app.use('/public', express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//POST route from contact form
app.post('/contact', function (req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form',
    text: `${req.body.name} (${req.body.email}) says: 
    ${req.body.message}`
  };
  
  smtpTrans.sendMail(mailOpts, function(error, res) { 
    if (error) { 
          res.json( { message: "You attempted to send a message but this is not implemented yet." });
        }
        else {
          res.json( { message: "You attempted to send a message but this is not implemented yet." });
        }

  });

  // smtpTrans.sendMail(mailOpts, function (error, response) {
  //   if (error) { 
  //     res.render('contact-failure');
  //   }
  //   else {
  //     res.render('contact-success');
  //   }
  // });

});




app.listen(PORT, () => log("Server is running on PORT,", 8080));

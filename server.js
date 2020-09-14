const express = require("express");
const sedMail = require("./mail.js")
require('dotenv').config();
const bodyParser = require('body-parser');
const exhbs = require("express-handlebars");
const nodemailer = require('nodemailer');
const path = require("path");
const sendMail = require("./mail.js");
const log = console.log;

const app = express();

const PORT = 8080;

// Data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Static Folder
app.use('/public', express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//POST route from contact form
app.post('/email', function (req, res) {

  console.log("Data: ", req.body);

  const{name, email, text} = req.body;
  
  sendMail(email, name, text, function(err, res) { 
      if (err) { 
            res.status(500).json({message: "Internal Error"});
          }
          else {
            res.json({message: "message received!!!"});
          }
        });


  // let mailOpts, smtpTrans;
  // smtpTrans = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.GMAIL_USER,
  //     pass: process.env.GMAIL_PASS
  //   }
  // });

  // mailOpts = {
  //   from: req.body.name + ' &lt;' + req.body.email + '&gt;',
  //   to: process.env.GMAIL_USER,
  //   subject: 'New message from contact form',
  //   text: `${req.body.name} (${req.body.email}) says: 
  //   ${req.body.message}`
  // };
  
  // smtpTrans.sendMail(mailOpts, function(error, res) { 
  //   if (error) { 
  //         res.sendFile('contact-failure');
  //       }
  //       else {
  //         res.sendFile('contact-success');
  //       }

  // });


});




app.listen(PORT, () => log("Server is running on PORT,", 8080));

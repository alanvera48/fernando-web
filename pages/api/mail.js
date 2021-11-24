"use strict";
require('dotenv').config()
const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER_NAME, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log(process.env.USER_NAME);

  transporter
    .sendMail({
      from: `" WebSite " <${process.env.USER_NAME}>`, // sender address
      to: "alanvera48@gmail.com", // list of receivers
      subject: "Message from WebSite ✔", // Subject line
      text: `<b>${req.body}</b>`, // plain text body
      html: `<!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="https://www.w3.org/1999/xhtml">
  
  <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <meta http–equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  </head>
  
  <body>
      <table width="400" height="auto" cellspacing="0" cellpadding="0" margin="0" padding="0" margin="0" style="
        background-color: #f7f7f8;
        font-family: 'Mulish', serif;
        padding: 20px;
        border: 0;
        margin: 0;
      ">
          <tbody>
              <tr style="display: flex; justify-content: center; align-items: center;">
                  <td style="display: flex; justify-content: center; align-items: center;">
                      <img src="https://i.ibb.co/yh3gKjb/logo.png" alt="logo" style="width: 200px;">
                  </td>
              </tr>
              <tr style="margin-bottom: 20px;">
                  <td> <i class="fas fa-signature"></i> <b> Nombre:</b></td>
                  <td>${req.body.name}</td>
              </tr>
              <tr style="margin-bottom: 20px">
                  <td><i class="fas fa-at"></i> <b> Email:</b></td>
                  <td>${req.body.email}</td>
              </tr>
              <tr style="margin-bottom: 20px">
                  <td> <i class="fas fa-envelope"></i><b> Message: </b></i></td>
                  <td>${req.body.message}</td>
              </tr>
          </tbody>
      </table>
  </body>
  
  </html>`, // html body
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
}

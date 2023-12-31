const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendMailer = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elliott.murray@ethereal.email",
      pass: "SqmxENADCKTjjGG1nt",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  // password : fysqhnzckeamcrli
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <abc@gmail.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
});

module.exports = sendMailer;

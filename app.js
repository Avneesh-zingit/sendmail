var nodemailer = require("nodemailer");
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: 'randomk8975@gmail.com',
//     pass: 'yibzaagiybgzjhrq',
//   },
// });
// var mailOptions = {
//   from:'randomk8975@gmail.com',
//   to:'rajput.avnesh0123@gmail.com',
//   subject:'Test Mail service ',
//   text:`Hello  i am arya stark from winterfell and i am going home `,
// };
// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
//E:\\Ambiente Technologies\\Zingit\\z2zingit-backend\\z2\\config.json



const sendEmail = (message)=>{
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'randomk8975@gmail.com',
          pass: 'qrbgwoglcbumuomn',
        },
      });
      var mailOptions = {
        from:'randomk8975@gmail.com',
        to:'avneesh.20720@knit.ac.in',
        subject:message.subject,
        text:message.text,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

}
let msg ={
    subject:'Hello how are you ',
    text:'Hey are you fine'
}



sendEmail(msg);


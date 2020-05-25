const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  sendEmail(message) {
    const messageWithSender = { ...message, from: "kurs@so-kommunizieren.ch" };
    return sgMail.send(messageWithSender);
  },
};

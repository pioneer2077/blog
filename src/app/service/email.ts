import nodemailer from "nodemailer";
export type EmailData = {
  from: string;
  subject: string;
  message: string;
};
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});
export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.GOOGLE_EMAIL,
    subject: `[BLOG] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <p>${message}</p>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  };
  return transporter.sendMail(mailData);
}

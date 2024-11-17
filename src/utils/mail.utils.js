import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    // secure: process.env.NODE_ENV !== 'development', // true for 465, false for other ports
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

export const sendEmail = async (dto) => {
    const { sender, receipients, subject, message } = dto;

    return await transport.sendMail({
        from: sender,
        to: receipients,
        subject: subject,
        html: message,
        text: message,
    });
}

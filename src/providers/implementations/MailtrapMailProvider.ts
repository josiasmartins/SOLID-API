// MailtrapMailProvivider: é um serviço que usa enquanto a aplicação está em desenvolvimento;
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMessage } from './../IMailProvider';

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'cb4a6a315b4e74',
                pass: 'd8f3665a95217f'
            }
        })
    }
    sendMail(message: IMessage): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async sendEmail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.to.name,
                address: message.to.email
            },
            subject: message.subject,
            html: message.body,
        })
    }
}
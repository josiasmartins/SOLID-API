import { IMailProvider } from './../../providers/IMailProvider';
import { ICreateUserRequestDTO } from './CreateUsersDTO';
import { IUserRepository } from './../../repositories/IUserRepository';
import { User } from '../../entities/User';
export class CreateUsersUseCase {
    constructor(
        private userRepository: IUserRepository,
        private mailProvider: IMailProvider,
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists.')
        }

        const user = new User(data);

        await this.userRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem vindo a plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}
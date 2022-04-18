import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUserRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';
import { CreateUsersUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUsersController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserCase = new CreateUsersUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(
    createUserCase
);

export { createUserCase, createUserController };
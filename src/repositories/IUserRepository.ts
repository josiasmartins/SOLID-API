import { User } from './../entities/User';

export interface IUserRepository {
    findEmail(email: string): Promise<User>;
    save(user: User): Promise<void>
}
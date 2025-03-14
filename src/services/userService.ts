import { User } from '@models/User'

export class UserService {
    private users: User[] = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Alice'},
    ];

    getUsers(): User[] {
        return this.users
    }
}
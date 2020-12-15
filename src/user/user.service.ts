import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>
    ){}

    public async getAll(){
        return await this.repo.find();
    }

    public async add(user: User){
        return await this.repo.save(user);
    }
}

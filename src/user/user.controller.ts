import { Body, Controller, Get, Post, Request} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private service: UserService
    ){}

    @Get()
    public async getAll(@Request() req){
        return await this.service.getAll();
    }

    @Post()
    public async add(@Body() body){
        return await this.service.add(body);
    }
}

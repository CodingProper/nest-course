import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatUserDto } from "./dt9/creat-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {
  }
  async createUser(dto: CreatUserDto){
    const user = await this.userRepository.create(dto);
    return user;
  }
  async getAllUsers(){
    const users = await this.userRepository.findAll();
    return users;
  }
}

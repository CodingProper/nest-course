import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatUserDto } from "./dt9/creat-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  create(@Body() userDto: CreatUserDto){
    return this.usersService.createUser(userDto)
  }

  @Get()
  getAll(){
    return this.usersService.getAllUsers();
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  //   @Get()
  //   async getAllUser(): Promise<User[]> {
  //     return this.userservice.getAllUsers();
  //   }
  @Get()
  async getAllUser(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userservice.getAllUsers();
    return response.status(200).json({
      status: 'ok!',
      message: 'success',
      result: result,
    });
  }
  @Post()
  async postUser(@Body() userData: User): Promise<User> {
    return this.userservice.createUser(userData);
  }
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User | null> {
    return this.userservice.getUser(id);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return this.userservice.deleteUser(id);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() postData: User,
  ): Promise<User> {
    return this.userservice.updateUser(id, postData);
  }
}

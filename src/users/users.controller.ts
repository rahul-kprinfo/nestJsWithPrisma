/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getAllUsers();
      return response.status(200).json({
        status: '200!',
        message: 'successfully fetched data',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'ok!',
        message: 'internal server error ',
      });
    }
  }
}

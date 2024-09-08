import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a user with hashed password
  async createUser(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  // Find a user by username
  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username }).exec();
  }
}

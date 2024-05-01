import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersController {
  constructor(private usersService: UsersService) {}

  async getCurrentUser(): Promise<UserModel> {
    const user = this.usersService.getCurrentUser();
    return user;
  }
}

import { Injectable } from '@angular/core';

import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';

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

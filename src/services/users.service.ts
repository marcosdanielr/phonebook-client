import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserModel } from '#models/user.model';

import { lastValueFrom } from 'rxjs';

interface UserResponse {
   user: UserModel;
}

interface UsersResponse {
   users: UserModel[];
}

@Injectable({
   providedIn: 'root',
})
export class UsersService {
   constructor(private http: HttpClient) {}

   async getCurrentUser(): Promise<UserModel> {
      const { user } = await lastValueFrom(
         this.http.get<UserResponse>('/api/auth/current_user', {
            responseType: 'json',
         }),
      );

      return user;
   }

   async list(): Promise<UserModel[]> {
      const { users } = await lastValueFrom(
         this.http.get<UsersResponse>('/api/users?page=1', {
            responseType: 'json',
         }),
      );

      return users;
   }
}

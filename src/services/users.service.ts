import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { UserModel } from '../models/user.model';

interface UserResponse {
   user: UserModel;
}

@Injectable({
   providedIn: 'root',
})
export class UsersService {
   constructor(private http: HttpClient) {}

   async getCurrentUser(): Promise<UserModel> {
      try {
         const { user } = await lastValueFrom(
            this.http.get<UserResponse>('/api/auth/current_user', {
               responseType: 'json',
            }),
         );

         return user;
      } catch (error) {
         console.log({ error });
         return error as any;
      }
   }
}

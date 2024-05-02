import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserModel } from '#models/user.model';

import { AuthenticateResponseViewModel } from '#view-models/auth.view-model';
import {
   CreateUserViewModel,
   UpdateUserViewModel,
} from '#view-models/users.view-model';
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

   async list(page: number): Promise<UserModel[]> {
      const { users } = await lastValueFrom(
         this.http.get<UsersResponse>(`/api/users?page=${page}`, {
            responseType: 'json',
         }),
      );

      return users;
   }

   async create(body: CreateUserViewModel): Promise<void> {
      await lastValueFrom(
         this.http.post<AuthenticateResponseViewModel>('/api/users', body),
      );
   }

   async update(userId: number, body: UpdateUserViewModel): Promise<void> {
      await lastValueFrom(
         this.http.patch<void>(`/api/users/${userId}`, {
            ...body,
            password: undefined,
         }),
      );
   }

   async delete(userId: number): Promise<void> {
      await lastValueFrom(this.http.delete<void>(`/api/users/${userId}`));
   }
}

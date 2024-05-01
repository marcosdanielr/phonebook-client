import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserModel } from '#models/user.model';

import {
   AuthenticateRequestViewModel,
   AuthenticateResponseViewModel,
} from '#view-models/auth.view-model';
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

   async create({
      email,
      password,
   }: AuthenticateRequestViewModel): Promise<void> {
      const { access_token } = await lastValueFrom(
         this.http.post<AuthenticateResponseViewModel>('/api/auth', {
            email,
            password,
         }),
      );

      this.setCookie('token', access_token, 7);
   }
}

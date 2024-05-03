import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserPhoneNumberModel } from '#models/user-phone-number.model';

import { lastValueFrom } from 'rxjs';

interface UserPhoneNumbersResponse {
   user_phone_number: UserPhoneNumberModel;
}

interface UserPhoneNumbersResponse {
   user_phone_numbers: UserPhoneNumberModel[];
}

@Injectable({
   providedIn: 'root',
})
export class UserPhoneNumbersService {
   constructor(private http: HttpClient) {}

   async create(
      user_id: number,
      phoneNumber: string,
   ): Promise<UserPhoneNumberModel> {
      const { user_phone_number } = await lastValueFrom(
         this.http.post<UserPhoneNumbersResponse>('/api/users/phone_numbers', {
            user_id,
            number: phoneNumber,
         }),
      );

      return user_phone_number;
   }

   async delete(id: number): Promise<void> {
      return await lastValueFrom(
         this.http.delete<void>(`/api/users/phone_numbers/${id}`),
      );
   }

   async list(userId: number): Promise<UserPhoneNumberModel[]> {
      const { user_phone_numbers } = await lastValueFrom(
         this.http.get<UserPhoneNumbersResponse>(
            `/api/users/${userId}/phone_numbers`,
            {
               responseType: 'json',
            },
         ),
      );

      return user_phone_numbers;
   }

   async update(id: number, phoneNumber: string): Promise<void> {
      return await lastValueFrom(
         this.http.patch<void>(`/api/users/phone_numbers/${id}`, {
            number: phoneNumber,
         }),
      );
   }
}

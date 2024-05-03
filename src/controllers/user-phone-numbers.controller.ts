import { Injectable, OnInit } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';

import { UserPhoneNumberModel } from '#models/user-phone-number.model';

import { UserPhoneNumbersService } from '#services/user-phone-numbers.service';

import { StatusCodeEnum } from '#constants/status-code.enum';

@Injectable({
   providedIn: 'root',
})
export class UserPhoneNumbersController {
   constructor(
      private userPhoneNumbersService: UserPhoneNumbersService,
      private formBuilder: FormBuilder,
   ) {}

   public createPhoneNumberForm: FormGroup = this.formBuilder.group({
      number: new FormControl<string | null>('', Validators.required),
   }) as FormGroup;

   public isCreatingPhoneNumber = false;
   public isFetchingPhoneNumbers = false;
   public loadingActionIn = 0;
   public userPhoneNumbers: UserPhoneNumberModel[] = [];

   public async create(userId: number): Promise<void> {
      if (this.createPhoneNumberForm.invalid) {
         return;
      }

      try {
         this.isCreatingPhoneNumber = true;
         const createUserPhoneNumberResponse =
            await this.userPhoneNumbersService.create(
               userId,
               this.createPhoneNumberForm.value.number,
            );

         this.userPhoneNumbers.unshift(createUserPhoneNumberResponse);
      } catch (error: any) {
         if (error.status === StatusCodeEnum.CONFLICT) {
            alert('Algum usuário no sistema já possui este número cadastrado.');
         }
      } finally {
         this.isCreatingPhoneNumber = false;
      }
   }

   public async delete(id: number): Promise<void> {
      if (window.confirm('Deseja excluir este telefone?')) {
         this.loadingActionIn = id;
         await this.userPhoneNumbersService.delete(id);

         const index = this.userPhoneNumbers.findIndex(
            (userPhoneNumber) => userPhoneNumber.id === id,
         );

         this.userPhoneNumbers.splice(index, 1);
         this.loadingActionIn = 0;
      }
   }

   public async list(userId: number): Promise<void> {
      this.userPhoneNumbers.length = 0;

      const listUserPhoneNumbersResponse =
         await this.userPhoneNumbersService.list(userId);

      this.userPhoneNumbers = listUserPhoneNumbersResponse;
   }
}

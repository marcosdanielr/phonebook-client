import { Injectable } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';

import { UserModel } from '#models/user.model';

import { UsersService } from '#services/users.service';

import { UserRolesEnum } from '#constants/user-roles.enum';

import { UserFormViewModel } from '#view-models/users.view-model';

@Injectable({
   providedIn: 'root',
})
export class UsersController {
   constructor(
      private usersService: UsersService,
      private formBuilder: FormBuilder,
   ) {}

   userForm: FormGroup = this.formBuilder.group({
      name: new FormControl<string | null>('', Validators.required),
      email: new FormControl<string | null>('', [
         Validators.required,
         Validators.email,
      ]),
      password: new FormControl<string | null>('', [
         Validators.required,
         Validators.minLength(8),
      ]),
      role: new FormControl<UserRolesEnum | string | null>(
         '',
         Validators.required,
      ),
   }) as FormGroup & UserFormViewModel;

   isLoading = false;
   currentPage = 1;
   users: UserModel[] | undefined;

   async getCurrentUser(): Promise<UserModel> {
      const user = await this.usersService.getCurrentUser();
      return user;
   }

   async listUsers(page: number): Promise<UserModel[]> {
      const users = await this.usersService.list(page);
      return users;
   }

   async createUser(): Promise<void> {
      this.isLoading = true;
      await this.usersService.create(this.userForm.value);
      this.isLoading = false;
   }

   async deleteUser(id: number): Promise<void> {
      if (window.confirm('Deseja excluir este usuário?')) {
         this.isLoading = true;
         await this.usersService.delete(id);
         this.currentPage = 1;
         const users = await this.listUsers(1);
         this.users = users;
         this.isLoading = false;
      }
   }

   async handleGoToPrevPage(): Promise<void> {
      if (this.currentPage > 1) {
         this.isLoading = true;

         this.currentPage--;

         const response = await this.listUsers(this.currentPage);
         this.users = response;

         this.isLoading = false;
      }
   }

   async handleGoToNextPage(): Promise<void> {
      if (this.users!.length >= 10) {
         this.isLoading = true;

         this.currentPage++;

         const response = await this.listUsers(this.currentPage);
         this.users = response;

         this.isLoading = false;
      }
   }
}

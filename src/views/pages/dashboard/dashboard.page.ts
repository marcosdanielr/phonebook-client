import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '#views/components/custom/header/header.component';

import { UserModel } from '#models/user.model';

import { UsersController } from '#controllers/users.controller';

import { UserRolesEnum } from '#constants/user-roles.enum';

import {
   HlmCaptionComponent,
   HlmTableComponent,
   HlmTdComponent,
   HlmThComponent,
   HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';

@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [
      HeaderComponent,
      HlmCaptionComponent,
      HlmTableComponent,
      HlmTdComponent,
      HlmThComponent,
      HlmTrowComponent,
      CommonModule,
   ],
   templateUrl: './dashboard.page.html',
})
export class DashboardPage extends UsersController implements OnInit {
   isLoading = true;
   users: UserModel[] | undefined;
   UserRolesEnum = UserRolesEnum;

   async ngOnInit(): Promise<void> {
      const response = await this.listUsers();
      this.users = response;
      this.isLoading = false;
   }
}

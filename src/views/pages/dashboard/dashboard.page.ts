import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '#views/components/custom/header/header.component';

import { UserModel } from '#models/user.model';

import { UsersController } from '#controllers/users.controller';

import { UserRolesEnum } from '#constants/user-roles.enum';

import {
   HlmPaginationContentDirective,
   HlmPaginationDirective,
   HlmPaginationEllipsisComponent,
   HlmPaginationItemDirective,
   HlmPaginationLinkDirective,
   HlmPaginationNextComponent,
   HlmPaginationPreviousComponent,
} from '@spartan-ng/ui-pagination-helm';
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
      HlmPaginationContentDirective,
      HlmPaginationDirective,
      HlmPaginationEllipsisComponent,
      HlmPaginationItemDirective,
      HlmPaginationLinkDirective,
      HlmPaginationNextComponent,
      HlmPaginationPreviousComponent,
   ],
   templateUrl: './dashboard.page.html',
})
export class DashboardPage extends UsersController implements OnInit {
   isLoading = true;
   currentPage = 1;
   users: UserModel[] | undefined;

   UserRolesEnum = UserRolesEnum;

   async ngOnInit(): Promise<void> {
      const response = await this.listUsers(this.currentPage);
      this.users = response;
      this.isLoading = false;
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

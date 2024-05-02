import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CreateUserModalComponent } from '#views/components/custom/create-user-modal/create-user-modal.component';
import { HeaderComponent } from '#views/components/custom/header/header.component';

import { UserModel } from '#models/user.model';

import { UsersController } from '#controllers/users.controller';

import { UserRolesEnum } from '#constants/user-roles.enum';

import { provideIcons } from '@ng-icons/core';
import { lucideTrash2 } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
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
      HlmButtonDirective,
      HlmIconComponent,

      CreateUserModalComponent,
   ],
   providers: [provideIcons({ lucideTrash2 })],
   templateUrl: './dashboard.page.html',
})
export class DashboardPage extends UsersController implements OnInit {
   UserRolesEnum = UserRolesEnum;

   async ngOnInit(): Promise<void> {
      const response = await this.listUsers(this.currentPage);
      this.users = response;
      this.isLoading = false;
   }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   ReactiveFormsModule,
} from '@angular/forms';

import { HlmSpinnerComponent } from '#views/components/ui/ui-spinner-helm/src';

import { UserModel } from '#models/user.model';

import { UsersController } from '#controllers/users.controller';

import { UserRolesEnum } from '#constants/user-roles.enum';

import { provideIcons } from '@ng-icons/core';
import { lucideEdit2, lucideTrash2 } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
   BrnDialogContentDirective,
   BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import {
   HlmDialogComponent,
   HlmDialogContentComponent,
   HlmDialogDescriptionDirective,
   HlmDialogFooterComponent,
   HlmDialogHeaderComponent,
   HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
   selector: 'app-update-user-modal',
   standalone: true,
   imports: [
      BrnDialogTriggerDirective,
      BrnDialogContentDirective,

      HlmDialogComponent,
      HlmDialogContentComponent,
      HlmDialogHeaderComponent,
      HlmDialogFooterComponent,
      HlmDialogTitleDirective,
      HlmDialogDescriptionDirective,

      HlmLabelDirective,
      HlmInputDirective,
      HlmButtonDirective,

      BrnSelectImports,
      HlmSelectImports,
      ReactiveFormsModule,

      CommonModule,

      HlmSpinnerComponent,
      HlmIconComponent,
   ],
   providers: [provideIcons({ lucideTrash2, lucideEdit2 })],
   templateUrl: './update-user-modal.component.html',
})
export class UpdateUserModalComponent extends UsersController {
   UserRolesEnum = UserRolesEnum;

   @Input('user-data') userData: UserModel = undefined!;

   setUserData(): void {
      const { email, name, role } = this.userData;

      this.setUserForm({
         email,
         name,
         role,
      });
   }

   async handleEditUser(event: Event): Promise<void> {
      event.preventDefault();

      if (this.userForm.invalid) {
         return;
      }

      const { name, email, role } = this.userForm.value;

      await this.updateUser(this.userData.id, {
         name,
         email,
         role,
      });

      window.location.reload();
   }
}

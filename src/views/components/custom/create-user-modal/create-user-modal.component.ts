import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HlmSpinnerComponent } from '#views/components/ui/ui-spinner-helm/src';

import { UsersController } from '#controllers/users.controller';

import { UserRolesEnum } from '#constants/user-roles.enum';

import { UserFormViewModel } from '#view-models/users.view-model';
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
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
   selector: 'app-create-user-modal',
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
   ],
   templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent extends UsersController {
   UserRolesEnum = UserRolesEnum;

   async handleCreateUser(event: Event): Promise<void> {
      event.preventDefault();

      if (this.userForm.invalid) {
         return;
      }

      await this.createUser();
      window.location.reload();
   }
}

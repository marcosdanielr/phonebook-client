import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserPhoneNumbersController } from '#controllers/user-phone-numbers.controller';

import { formatToPhoneNumber } from '#utils/format-to-phone-number.util';

import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideTrash2 } from '@ng-icons/lucide';
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
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
   selector: 'app-user-phones-modal',
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
      HlmSkeletonComponent,

      CommonModule,

      HlmSpinnerComponent,
      HlmIconComponent,
      HlmInputDirective,
      HlmButtonDirective,
      NgxMaskDirective,
   ],
   providers: [provideIcons({ lucidePlus, lucideTrash2 }), provideNgxMask()],
   templateUrl: './user-phones-modal.component.html',
})
export class UserPhonesModalComponent extends UserPhoneNumbersController {
   formatToPhoneNumber = formatToPhoneNumber;

   private _userId: number = undefined!;
   @Input('user-id')
   set userId(value: number) {
      if (value !== this._userId && value) {
         this.isFetchingPhoneNumbers = true;
         this._userId = value;
         this.list(value).finally(() => {
            this.isFetchingPhoneNumbers = false;
         });
      }
   }

   public async handleCreateUserPhone(event: Event): Promise<void> {
      event.preventDefault();
      await this.create(this._userId);
   }
}

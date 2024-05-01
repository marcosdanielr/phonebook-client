import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthController } from '#controllers/auth.controller';

import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
   selector: 'app-sign-in',
   templateUrl: './sign-in.page.html',
   standalone: true,
   imports: [
      NgOptimizedImage,
      HlmButtonDirective,
      HlmInputDirective,
      HlmIconComponent,
      HlmLabelDirective,
      ReactiveFormsModule,
      HlmSpinnerComponent,
      CommonModule,
   ],
   providers: [provideIcons({ lucideEye, lucideEyeOff })],
})
export class SignInPage extends AuthController {
   public isShowingPassword = false;

   handleTogglePasswordVisibility(): void {
      this.isShowingPassword = !this.isShowingPassword;
   }
}

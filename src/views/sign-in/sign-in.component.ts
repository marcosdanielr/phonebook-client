import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

import { AuthController } from '../../controllers/auth.controller';
import { HlmButtonDirective } from '../../libs/ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmIconComponent } from '../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component';
import { HlmInputDirective } from '../../libs/ui/ui-input-helm/src/lib/hlm-input.directive';
import { HlmLabelDirective } from '../../libs/ui/ui-label-helm/src/lib/hlm-label.directive';

@Component({
   selector: 'app-sign-in',
   templateUrl: './sign-in.component.html',
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
export class SignInComponent extends AuthController {
   public isShowingPassword = false;

   handleTogglePasswordVisibility(): void {
      this.isShowingPassword = !this.isShowingPassword;
   }
}

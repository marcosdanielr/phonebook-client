import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
  ],
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  isShowingPassword: boolean = false;

  handleTogglePasswordVisibility(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
}

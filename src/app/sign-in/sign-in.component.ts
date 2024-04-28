import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { AuthenticationService } from '../../services/authentication.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
    FormsModule,
  ],
  providers: [provideIcons({ lucideEye, lucideEyeOff }), AuthenticationService],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }
  public isShowingPassword: boolean = false;

  formGroup: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  formData = {
    email: '',
    password: '',
  };

  handleTogglePasswordVisibility(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }

  async handleLogin(event: Event): Promise<void> {
    event.preventDefault();

    try {
      await this.authenticationService.login(this.formData);
      this.router.navigate(['admin']);
    } catch (error) {
      console.error(error);
    }
  }
}

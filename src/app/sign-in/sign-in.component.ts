import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { HlmButtonDirective } from '../../libs/ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmInputDirective } from '../../libs/ui/ui-input-helm/src/lib/hlm-input.directive';
import { HlmIconComponent } from '../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component';
import { HlmLabelDirective } from '../../libs/ui/ui-label-helm/src/lib/hlm-label.directive';
import { AuthenticateRequestModelView } from '../../models-views/auth.model-view';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { RoutesEnum } from '../../constants/routes.enum';

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
export class SignInComponent {
  public isShowingPassword = false;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  public isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  handleTogglePasswordVisibility(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }

  async handleLogin(event: Event): Promise<void> {
    event.preventDefault();

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    try {
      await this.authService.login(
        this.loginForm.value as AuthenticateRequestModelView
      );
      this.router.navigate([RoutesEnum.DASHBOARD]);
    } catch (error) {
      alert('Credenciais inválidas!');
    } finally {
      this.isLoading = false;
    }
  }
}

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticateRequestModelView } from '#models-views/auth.model-view';

import { AuthService } from '#services/auth.service';

import { RoutesEnum } from '#constants/routes.enum';

@Injectable({
   providedIn: 'root',
})
export class AuthController {
   constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
   ) {}

   public loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
   });
   public isLoading = false;

   async login(event: Event): Promise<void> {
      event.preventDefault();

      if (this.loginForm.invalid) {
         return;
      }

      this.isLoading = true;

      try {
         await this.authService.login(
            this.loginForm.value as AuthenticateRequestModelView,
         );
         this.router.navigate([RoutesEnum.DASHBOARD]);
      } catch (error) {
         alert('Credenciais inválidas!');
      } finally {
         this.isLoading = false;
      }
   }

   logout(): void {
      this.authService.logout();
      this.router.navigate([RoutesEnum.LOGIN]);
   }
}

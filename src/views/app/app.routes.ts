import { Routes } from '@angular/router';

import { DashboardComponent } from '#views/pages/dashboard/dashboard.component';
import { SignInComponent } from '#views/pages/sign-in/sign-in.component';

import { authGuard } from '#guards/auth.guard';

import { RoutesEnum } from '#constants/routes.enum';

export const routes: Routes = [
   {
      path: RoutesEnum.LOGIN,
      component: SignInComponent,
      canActivate: [authGuard.publicRoute],
   },
   {
      path: RoutesEnum.DASHBOARD,
      component: DashboardComponent,
      canActivate: [authGuard.privateRoute],
   },
];

import { Routes } from '@angular/router';

import { DashboardPage } from '#views/pages/dashboard/dashboard.page';
import { SignInPage } from '#views/pages/sign-in/sign-in.page';

import { authGuard } from '#guards/auth.guard';

import { RoutesEnum } from '#constants/routes.enum';

export const routes: Routes = [
   {
      path: RoutesEnum.LOGIN,
      component: SignInPage,
      canActivate: [authGuard.publicRoute],
   },
   {
      path: RoutesEnum.DASHBOARD,
      component: DashboardPage,
      canActivate: [authGuard.privateRoute],
   },
];

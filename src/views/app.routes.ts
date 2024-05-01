import { Routes } from '@angular/router';

import { RoutesEnum } from '../constants/routes.enum';
import { authGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';

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

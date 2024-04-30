import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [authGuard.publicRoute],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [authGuard.privateRoute],
  },
];

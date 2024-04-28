import { Injectable } from '@angular/core';
import { api } from '../lib/axios';
import { AuthenticateRequestModelView } from '../models-views/authentication.model-view';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated = false;
  private tokenKey: string = 'token';

  async login({
    email,
    password,
  }: AuthenticateRequestModelView): Promise<void> {
    const { data } = await api.post('/auth', {
      email,
      password,
    });

    localStorage.setItem(this.tokenKey, data.access_token);

    this.isAuthenticated = true;
  }

  isAuthenticatedUser(): boolean {
    if (localStorage.getItem(this.tokenKey) || this.isAuthenticated) {
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated = false;
  }
}

import { Injectable, Inject, forwardRef, inject } from '@angular/core';
import { AuthenticateRequestModelView } from '../models-views/auth.model-view';
import { DOCUMENT } from '@angular/common';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  async login({
    email,
    password,
  }: AuthenticateRequestModelView): Promise<void> {
    const apiService = inject(ApiService);
    const api = apiService.getApi();

    const { data } = await api.post('/auth', {
      email,
      password,
    });

    this.setCookie('token', data.access_token, 7);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    this.deleteToken();
  }

  public getToken(): string | null {
    const cookies = this.document!.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === 'token') {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    this!.document!.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  private deleteToken(): void {
    this.document!.cookie =
      'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }
}

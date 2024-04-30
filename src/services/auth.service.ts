import { Injectable, Inject } from '@angular/core';
import { api } from '../lib/axios';
import { AuthenticateRequestModelView } from '../models-views/auth.model-view';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'token';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  async login({
    email,
    password,
  }: AuthenticateRequestModelView): Promise<void> {
    const { data } = await api.post('/auth', {
      email,
      password,
    });

    this.setCookie(this.tokenKey, data.access_token, 7);
  }

  isAuthenticated(): boolean {
    return !!this.getCookie(this.tokenKey);
  }

  logout(): void {
    this.deleteCookie(this.tokenKey);
  }

  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    this.document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  private getCookie(name: string): string | null {
    const cookies = this.document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  private deleteCookie(name: string): void {
    this.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

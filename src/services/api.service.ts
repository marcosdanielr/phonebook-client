import axios from 'axios';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiInstance;

  constructor(private injector: Injector) {
    const authService = this.injector.get(AuthService);

    this.apiInstance = axios.create({
      baseURL: '/api',
      headers: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
  }

  getApi() {
    return this.apiInstance;
  }
}

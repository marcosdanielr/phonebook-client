import {
   HttpHandler,
   HttpInterceptor,
   HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '#services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor(private authService: AuthService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken();

      console.log({
         authToken,
      });

      const authReq = req.clone({
         setHeaders: authToken ? { Authorization: `Bearer ${authToken}` } : {},
      });

      return next.handle(authReq);
   }
}

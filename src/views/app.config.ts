import {
   HTTP_INTERCEPTORS,
   HttpClientModule,
   provideHttpClient,
   withFetch,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AuthInterceptor } from '../http-interceptors/auth-interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(routes),
      provideClientHydration(),
      importProvidersFrom(HttpClientModule),
      provideHttpClient(withFetch()),
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true,
      },
   ],
};

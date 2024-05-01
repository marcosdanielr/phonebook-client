import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '#views/app/app.component';
import { appConfig } from '#views/app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
   console.error(err),
);

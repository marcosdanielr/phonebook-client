import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '#views/app/app.component';
import { config } from '#views/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

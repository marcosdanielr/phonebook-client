import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '#views/app.component';
import { config } from '#views/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

import { Component } from '@angular/core';

import { HeaderComponent } from '#views/components/custom/header/header.component';

@Component({
   selector: 'app-dashboard',
   standalone: true,
   imports: [HeaderComponent],
   templateUrl: './dashboard.page.html',
})
export class DashboardPage {}

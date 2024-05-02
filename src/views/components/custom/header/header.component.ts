import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '#models/user.model';

import { AuthController } from '#controllers/auth.controller';
import { UsersController } from '#controllers/users.controller';

import { RoutesEnum } from '#constants/routes.enum';

import { provideIcons } from '@ng-icons/core';
import { lucideLogOut, lucideSettings, lucideUser } from '@ng-icons/lucide';
import {
   HlmAvatarComponent,
   HlmAvatarFallbackDirective,
   HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
   BrnPopoverCloseDirective,
   BrnPopoverComponent,
   BrnPopoverContentDirective,
   BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';

@Component({
   selector: 'app-header',
   standalone: true,
   imports: [
      HlmAvatarImageDirective,
      HlmAvatarComponent,
      BrnPopoverCloseDirective,
      BrnPopoverComponent,
      BrnPopoverContentDirective,
      BrnPopoverTriggerDirective,
      HlmAvatarFallbackDirective,
      HlmIconComponent,
      HlmSeparatorDirective,
      BrnSeparatorComponent,
   ],
   providers: [provideIcons({ lucideUser, lucideSettings, lucideLogOut })],
   templateUrl: './header.component.html',
})
export class HeaderComponent extends UsersController implements OnInit {
   private authController = inject(AuthController);
   public user: UserModel | undefined;

   async ngOnInit(): Promise<void> {
      this.isLoading = true;
      const response = await this.getCurrentUser();
      this.user = response;
      this.isLoading = false;
   }

   handleGoToHome(): void {
      const router = inject(Router);
      router.navigate([RoutesEnum.DASHBOARD]);
   }

   handleLogout(): void {
      this.authController.logout();
   }
}

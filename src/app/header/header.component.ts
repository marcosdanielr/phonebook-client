import { Component, inject } from '@angular/core';
import {
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { HlmIconComponent } from '../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideLogOut, lucideSettings, lucideUser } from '@ng-icons/lucide';
import { HlmSeparatorDirective } from '../../libs/ui/ui-separator-helm/src/lib/hlm-separator.directive';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RoutesEnum } from '../constants/routes.enum';

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
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate([RoutesEnum.LOGIN]);
  }
}

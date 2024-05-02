import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserRolesEnum } from '#constants/user-roles.enum';

export interface CreateUserViewModel {
   name: string;
   email: string;
   password: string;
   role: UserRolesEnum;
}

export interface UpdateUserViewModel {
   name?: string;
   email?: string;
   role?: UserRolesEnum;
}

export interface UserFormViewModel {
   controls: {
      name: FormControl<string | null>;
      email: FormControl<string | null>;
      password: FormControl<string | null>;
      role: FormControl<UserRolesEnum | null>;
   };
}

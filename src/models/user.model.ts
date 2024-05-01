import { UserRolesEnum } from '#constants/user-roles.enum';

export interface UserModel {
   id: number;
   name: string;
   role: UserRolesEnum;
   created_at: Date;
}

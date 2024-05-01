export interface AuthenticateRequestViewModel {
   email: string;
   password: string;
}

export interface AuthenticateResponseViewModel {
   access_token: string;
}

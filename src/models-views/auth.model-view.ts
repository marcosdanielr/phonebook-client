export interface AuthenticateRequestModelView {
   email: string;
   password: string;
}

export interface AuthenticateResponseModelView {
   access_token: string;
}

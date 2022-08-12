export interface AuthenticationProfile {
  id: string;
  kind: AuthenticationProfileKind;
  name: string;
  loginModel: string;
  default: boolean;
  options: AuthenticationProfileOptions;
}

export interface AuthenticationProfileOptions {
  loginVariable: string;
  usernameProperty: string | null;
  passwordProperty: string | null;
  localeProperty: string | null;
  redirectEndpoint: string | null;
  refreshTokenTimeout: number | null;
  accessTokenTimeout: number | null;
}

export enum AuthenticationProfileKind {
  customAuthentication = 'customAuthentication',
  usernamePassword = 'usernamePassword',
}

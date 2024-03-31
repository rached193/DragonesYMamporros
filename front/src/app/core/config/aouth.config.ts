import { AuthConfig } from 'angular-oauth2-oidc';

export const AuthCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://id.twitch.tv/oauth2',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:4200/landing',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  dummyClientSecret: '',

  responseType: 'code',
  scope: 'openid',

  showDebugInformation: true,
};
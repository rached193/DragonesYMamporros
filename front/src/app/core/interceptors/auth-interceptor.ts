import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IGDN_URL } from '../config/constants';

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const oauthService = inject(OAuthService);

  if (request.url.includes('v4')) {
    const accessToken = oauthService.getAccessToken();
    const clientId = oauthService.clientId;

    console.log('hola');
    console.log(accessToken, clientId);
    if (accessToken && clientId) {
      request = request.clone({
        setHeaders: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
  }

  return next(request);
};

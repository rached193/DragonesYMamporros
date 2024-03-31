import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthCodeFlowConfig } from './core/config/aouth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dragonesymamporros';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(AuthCodeFlowConfig);
    this.oauthService
      .loadDiscoveryDocument()
      .then((res) => console.log(this.oauthService.getAccessToken()));
  }

  ngOnInit(): void {}

  autorize() {
    this.oauthService.initCodeFlow();
  }
}

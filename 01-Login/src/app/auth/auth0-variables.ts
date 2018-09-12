interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'DNfiOhqkgaX6Ly7vyHu6HlOhikOZy1j4',
  domain: 'chetank.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};

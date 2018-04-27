interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  baseUri : string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '8O9eTS426yogpY2jqdL8rjhvfG69K1if',
  domain: 'manmohann.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  baseUri:'http://localhost:61148/'
};

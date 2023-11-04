import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2PasswordGrant extends OAuth2PasswordGrantAuthenticator {
    serverTokenEndpoint = 'http://127.0.0.1:5000/api/tokenAuth'
}

import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default class CustomTokenAuthenticator extends BaseAuthenticator {
    async restore(data) {
        if (data && data.token) {
          return data;
        }
        return { token: null };
      }
    
      async authenticate(username) {
        // Implement your authentication logic here
    
        try {
          const response = await fetch('http://127.0.0.1:5000/api/tokenAuth', {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            return { token: data.token };
          } else {
            throw new Error('Authentication failed');
          }
        } catch (error) {
          throw error;
        }
    }
}
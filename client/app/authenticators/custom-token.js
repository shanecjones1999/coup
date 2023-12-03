import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import ENV from 'client/config/environment';

export default class CustomTokenAuthenticator extends BaseAuthenticator {
    async restore(data) {
        if (data && data.token) {
            return data;
        }
        return { token: null };
    }

    async authenticate(user) {
        try {
            const response = await fetch(`${ENV.API_HOST}/api/signin`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            return { token: data.token };
        } catch (error) {
            return error;
        }
    }
}

import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('play');
  this.route('games');
  this.route('game', { path: '/game/:game_id' });
});

import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = 'http://127.0.0.1:5000';
    namespace = 'api';
}

// app/serializers/application.js

import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        // Always normalize the payload, even if it doesn't contain a "data" key
        if (payload.data) {
            // If the payload contains a "data" key, normalize it according to your model
            return super.normalizeResponse(store, primaryModelClass, payload.data, id, requestType);
        } else {
            // If the payload doesn't contain a "data" key, normalize the entire payload
            return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
        }
    }
}

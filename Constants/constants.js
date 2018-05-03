'use strict';

angular.module('constantsModule', [])
    .constant('appConstants', {
    STATES: { //angular ui-routing states
        HOME: {
            KEY: 'home'
        }
    },
    STORAGE: {
        TOKEN_NAME: 'AuthToken' //name of auth token in local storage
    },
    API: {
        BASE: '/api'
    }
});
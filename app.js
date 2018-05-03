'use strict';

angular.module('AngularApp', ['ui.router', 'ngResource', 'ngFileUpload', 'constantsModule', 'servicesModule', 'featureModule'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state(appConstants.STATES.HOME.KEY,
        {
            url: '/' + appConstants.STATES.HOME.KEY,
            views: {
                contentView: {
                    templateUrl: '/App/home/home.html',
                    controller: 'HomeController'
                }
            }
        });

        $locationProvider.hashPrefix('');

    });
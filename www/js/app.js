// Ionic Starter App

angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('menu.live', {
      url: '/live',
      views: {
        'main-view': {
          templateUrl: 'templates/live.html',
        }
      }
    })

    .state('menu.live.video', {
      url: '/video',
      views: {
        'video-tab': {
          templateUrl: 'templates/live_video.html',
        }
      }
    })

    .state('menu.live.text', {
      url: '/text',
      views: {
        'text-tab': {
          templateUrl: 'templates/live_text.html',
          controller: 'LiveTextCtrl'
        }
      }
    })

    .state('menu.order.expired', {
      url: '/expired',
      views: {
        'expired-tab': {
          templateUrl: 'templates/order_expired.html',
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/live/video');

});
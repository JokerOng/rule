/**
 * Created by Albert_Ong on 16/5/30.
 */
require('./assets/style/main.less');
var angular = require('angular');
var ui = require('angular-ui-router');
var appCtrlModule = require('./assets/js/appCtrl');

var ruleApp = angular.module('ruleApp', [ui, appCtrlModule.name]);
ruleApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "/assets/tpl/state1.html",
      controller: 'appCtrl',
      controllerAs: 'app'
    })
});
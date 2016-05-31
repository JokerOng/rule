var angular = require('angular');
var appCtrlModule = angular.module('ruleApp.appCtrlModule', []);
appCtrlModule.controller('appCtrl',function($scope){
  console.log(this);
});
module.exports = appCtrlModule;
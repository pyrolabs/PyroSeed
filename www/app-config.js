angular.module('pyro.config', [])
  .factory('config', function($q, $timeout, $http, $resourceProvider) {
    return $resourceProvider('./config.json', {FBURL:'@FBURL'});
    
  });
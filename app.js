var app = angular.module('app', [ '720kb.datepicker']);

app.controller('mainCtrl', function($scope, $http) {

    $scope.currentDate = new Date();
    console.log($scope.currentDate);
    var from = '2017-09-10';
    var to = '2017-09-13';
       $http.get(`http://104.197.128.152/data/adrequests?from=${from}&to=${to}`)
         .then(function(res){
            $scope.data = res.data;
            console.log($scope.data);
          });
        
  });
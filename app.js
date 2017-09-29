var app = angular.module('app', [ '720kb.datepicker']);

app.controller('mainCtrl', function($scope, $http) {

    
    
    // var from = '2017-09-10';
    // var to = '2017-09-13';
    $scope.from = "";
    $scope.to = "";
    $scope.currentDate = (new Date()).toString();
    $scope.data;
       
    $scope.clearSearch = function () {
      $scope.from = "";
      $scope.to = "";
  };

    $scope.search = function(){
      $http.get(`http://104.197.128.152/data/adrequests?from=${$scope.from}&to=${$scope.to}`)
         .then(function(res){
            $scope.data = res.data.data;
            console.log($scope.data);
          });
    }
        
  });
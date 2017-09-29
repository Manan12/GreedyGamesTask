var app = angular.module('app', [ '720kb.datepicker']);

app.controller('mainCtrl', function($scope, $http) {

    
    
    // var from = '2017-09-10';
    // var to = '2017-09-13';
    $scope.from = "";
    $scope.to = "";
    $scope.currentDate = (new Date()).toString();
    console.log($scope.currentDate);
    console.log(new Date());
    $scope.data;
       

    $scope.search = function(){
      $http.get(`http://104.197.128.152/data/adrequests?from=${$scope.from}&to=${$scope.to}`)
         .then(function(res){
            $scope.data = res.data;
            console.log($scope.data);
          });
    }
        
  });
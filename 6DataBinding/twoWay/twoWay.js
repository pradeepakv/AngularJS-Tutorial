var app = angular.module("sample",[]); 
app.controller("emp", ["$scope", function($scope){
    $scope.a = 13;
    $scope.b = 56;
    $scope.getSum = function(){
        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    }
}]);
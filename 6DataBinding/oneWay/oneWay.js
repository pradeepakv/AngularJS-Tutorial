var app = angular.module("sample",[]); 
app.controller("emp", ["$scope", function($scope){
    $scope.name = "pradeepa";
    $scope.place = "london";
    $scope.a = 13;
    $scope.b = 56;
}]);
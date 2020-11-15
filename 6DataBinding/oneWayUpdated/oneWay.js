var app = angular.module("sample",[]); 
app.controller("emp", ["$scope", function($scope){
    $scope.name = "pradeepa";
    $scope.place = "london";
    $scope.a = 13;
    $scope.b = 56;
    $scope.getSum = function(){
        $scope.a = $scope.a * 2;
        $scope.b = $scope.b * 2;
        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    }
}]);
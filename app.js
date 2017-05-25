  angular.module('myHttp', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        }).when("/phone/:id", {
            templateUrl:"pages/info.html",
            controller:"PhoneController"
        })

    })
    .controller("PhoneController", function($scope, $http, $routeParams){
        $scope.phone = {};
        $http({
            method : "GET",
            url : ("phones/" + $routeParams.id + ".json" )
        }).then(
            successResponse => {
                $scope.phone = successResponse.data;
            },
            errorResponse => {}
        )
    })
    .controller("MainController", function($scope, $http){
        $scope.message = "Hi"
        $http({
            method : "GET",
            url : "phones/phones.json"
        }).then(
            successResponse => {
                console.log(successResponse)
                $scope.data = successResponse;
            },
            errorResponse => {}
        )
    })
    
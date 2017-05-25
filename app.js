  angular.module('myHttp', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        }).when("/phone", {
            templateUrl:"pages/info.html"
        })

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
    
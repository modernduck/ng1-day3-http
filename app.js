  angular.module('myHttp', ['ngRoute', 'phone.data'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        }).when("/phone/:id", {
            templateUrl:"pages/info.html",
            controller:"PhoneController"
        })

    })
    .controller("PhoneController", function($scope, $http, $routeParams, Phone){
       /* $scope.phone = {};
        $http({
            method : "GET",
            url : ("phones/" + $routeParams.id + ".json" )
        }).then(
            successResponse => {
                $scope.phone = successResponse.data;
            },
            errorResponse => {}
        )*/
        $scope.phone = Phone.get({phoneId:$routeParams.id})
    })
    .controller("MainController", function($scope, $http, Phone){
        $scope.message = "Hi"
       /* $http({
            method : "GET",
            url : "phones/phones.json"
        }).then(
            successResponse => {
                console.log(successResponse)
                $scope.data = successResponse;
            },
            errorResponse => {}
        )*/
        $scope.phones = Phone.query();
        $scope.orderProp = "age";
        $scope.realOrder = false;

        $scope.updateOrder = function(){
            //0 = false;
            //1 = true
            $scope.realOrder = Number($scope.orderOrder)
            console.log($scope.realOrder)
        }
    })
    .directive("phoneDetail", function(){
        return {
            templateUrl:"widgets/phone-item.html",
            scope:{
                "phone":"="
            }
        }
    })
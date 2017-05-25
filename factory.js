angular.module('phone.data', ['ngResource'])
    .factory("Phone", ['$resource', function($resource){
        //return {
            //getUsers : () =>{}
        //}

        // $resource(url, paramsDefault, actions)
        //(default) query => phones
        //(now) query => phones/phones.json
        return $resource('phones/:phoneId.json', {},  {
            query: {
                method: 'GET',
                params:{
                    phoneId:'phones'
                },
                isArray:true
            }  
        })
    }  ])


    
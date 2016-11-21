 app.config([
    	'$routeProvider',
    	function($routeProvider){
    		$routeProvider
    		.when('/webc',{
    			templateUrl:'webc/webc.html',
    			
    		})
            .when('/webc1',{
                templateUrl:'webc1/webc1.html',
                
            })
            .when('/webc2',{
                templateUrl:'webc2/webc2.html',
                
            })
            .when('/webc3',{
                templateUrl:'webc3/webc3.html',
                
            })
            .when('/webc4',{
                templateUrl:'webc4/webc4.html',
                
            })
            .when('/webc5',{
                templateUrl:'webc5/webc5.html',
                
            })
            .when('/webc6',{
                templateUrl:'webc6/webc6.html',
                
            })
    	}
    ])
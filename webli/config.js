 app.config([
    	'$routeProvider',
    	function($routeProvider){
    		$routeProvider.when('/denglu',{
    			templateUrl:'webli/webli.html',			
    		})
    		.when('/zhuce',{
    			templateUrl:'webli2/webli2.html',
    			
    		}).when('/zhaomima',{
    			templateUrl:'webli3/webli3.html',
    			
    		})
    		.when('/xiugai',{
    			templateUrl:'webli1/webli1.html',
    			
    		})
    		.when('/webc',{
    			templateUrl:'webc/webc.html',
    			
    		})
    	}
    ])
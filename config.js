app.config(
		 ["$routeProvider",
		 function($routeProvider){
		  $routeProvider.when("/bookshelf",{
		  templateUrl:"bookshelf/bookShelf/bookShelf.html",
//		  controller:"loginCtrl"
		  })
//		  .when("/zhuce",{
//		  templateUrl:"one/b/b.html",
//		  controller:"zhuceCtrl"
//		  })
		}]
		 );
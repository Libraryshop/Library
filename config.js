app.config(
		 ["$routeProvider",
		 function($routeProvider){
		  $routeProvider											
		  .when("/bookShelf",{
		  templateUrl:"bookshelf/bookShelf/bookShelf.html",			//书架的链接
//		  controller:"loginCtrl"
		  })
		  .when("/searchView",{
		  templateUrl:"bookshelf/searchView/searchView.html",		//搜寻页面
//		  controller:"loginCtrl"
		  })
		  .when("/searchList",{
		  templateUrl:"bookshelf/searchList/searchList.html",		//搜寻列表
//		  controller:"loginCtrl"
		  })
		  .when("/searchFilter",{
		  templateUrl:"bookshelf/searchFilter/searchFilter.html",	//搜寻过滤
//		  controller:"loginCtrl"
		  })
		  .when("/bc1",{											
		  templateUrl:"bookcity/bc1/bc1.html",						//bc1
//		  controller:"loginCtrl"
		  })
		   .when("/bc2",{
		  templateUrl:"bookcity/bc2/bc2.html",						//bc2
//		  controller:"loginCtrl"
		  })
		     .when("/bc3",{
		  templateUrl:"bookcity/bc3/bc3.html",						//bc2
//		  controller:"loginCtrl"
		  })
		       .when("/bc4",{
		  templateUrl:"bookcity/bc4/bc4.html",						//bc2
//		  controller:"loginCtrl"
		  })
		         .when("/bc5",{
		  templateUrl:"bookcity/bc5/bc5.html",						//bc2
//		  controller:"loginCtrl"
		  })
		           .when("/bc6",{
		  templateUrl:"bookcity/bc6/bc6.html",						//bc2
//		  controller:"loginCtrl"
		  })
		}]
		 );
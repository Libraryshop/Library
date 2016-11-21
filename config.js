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
		  
		}]
		 );
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
		  .when("/comment",{
		  	templateUrl:"newpages/article/comment/comment.html",
		  })
		  .when("/contents",{
		  	templateUrl:"newpages/article/contents/contents.html",
		  })
		  .when("/copy",{
		  	templateUrl:"newpages/article/copy/copy.html",
		  })
		  .when("/information",{
		  	templateUrl:"newpages/article/information/information.html",
		  })
		  .when("/mode",{
		  	templateUrl:"newpages/article/mode/mode.html",
		  })
		  .when("/reading",{
		  	templateUrl:"newpages/article/reading/reading.html",
		  })
		  .when("/readList",{
		  	templateUrl:"newpages/article/readList/readList.html",
		  })
		  .when("/share",{
		  	templateUrl:"newpages/article/share/share.html",
		  })
		  .when("/share",{
		  	templateUrl:"Page/sjxq/sjxq.html",
		  })
		  
		}]);
		 
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
		  templateUrl:"bookcity/bc3/bc3.html",						//bc3
//		  controller:"loginCtrl"
		  })
		  .when("/bc4",{
		  templateUrl:"bookcity/bc4/bc4.html",						//bc4
//		  controller:"loginCtrl"
		  })
		  .when("/bc5",{
		  templateUrl:"bookcity/bc5/bc5.html",						//bc5
//		  controller:"loginCtrl"
		  })
		  .when("/bc6",{
		  templateUrl:"bookcity/bc6/bc6.html",						//bc6
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
		  .when("/bookmark",{
		  	templateUrl:"Page/bookmark/bookmark.html",
		  })
		  .when("/fail",{
		  	templateUrl:"Page/fail/fail.html",
		  })
		  .when("/note",{
		  	templateUrl:"newpages/note/note.html",
		  })
		  .when("/Notesmanagement",{
		  	templateUrl:"Page/Notes management/Notesmanagement.html",
		  })
		  .when("/success",{
		  	templateUrl:"Page/success/success.html",
		  })
		  .when("/sjxq",{
		  	templateUrl:"Page/sjxq/sjxq.html",
		  })
		    .when("/bookmark2",{
		  	templateUrl:"newpages/bookmark2/bookmark.html",
		  })
		      .when("/Notesmanagement2",{
		  	templateUrl:"newpages/Notesmanagement2/Notesmanagement.html",
		  })
		  
		  
		}]);
		 


 app.directive('myUl',[function(){
		return{
			restrict:'A',
			transclude:true,
	        replace:true,
			template:'<div><div ng-transclude></div></div>',
	        link:function($scope,el){
	        	
	        
    function webc(cl){
    $(cl).on("click",function(){
        $(".box").css("display","block")
        
        return false;
    })
    $(".cen-tan").on("click",false)
    $(document).on("click",function(){
        $(".box").css("display","none")
        $(".cen-tan3").css("zIndex","4")        
        $(".cen-tan4").css("zIndex","4")

    })}
    webc(".web-lian")   
    webc(".web-xui")
    webc("web-tou")    
    webc("web-xing")
    $(".web-tou").on("click",function(){
          $(".box").css("display","block")
         $(".cen-tan3").css("zIndex","10")
         return false;
    })
    
    $(".web-xing").on("click",function(){
         $(".box").css("display","block")
         $(".cen-tan4").css("zIndex","10")
         return false;
    })
    var fa=true;
    $(".web-qq").on("click",function(){
       if(fa){
           $(".cb-right span div").addClass("web-q")
             $(".web-q").css("background","#50e2c8")
       }else{
            $(".cb-right span div").removeClass("web-q")
           
       }
              
//        $(".cb-right span div").remove("web-q")
//        if($(".web-q").class==="web-q"){
//            
//        }
        console.log(fa)
         fa=!fa;
    })
//    $(".cb-right span div").on("click",function(){
//        $(".cb-right span div").removeClass("web-q")
//        $(".tan-cen .cb-right span div").$addClass("web-q")
//       
//    })
    $(".web-qu").on("click",function(){
         $(".box").css("display","none")
          return false;
    })

	        	
	        }
		}
	}])


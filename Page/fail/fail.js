$(document).ready(function(){
			$(".Fpl").on("keyup", function(e) {
						console.log(1)
					if (e.keyCode === 13) {
						$(".zhezhao").css("display","block")
					}
				})
					$(".Fover").on("click",function(){
						$(".zhezhao").css("display","none")
					})
	});

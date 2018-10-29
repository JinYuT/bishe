
window.onload = function(){
	var i = 1;
	
	$(".main1 .choose").click(function(){
			$(".main1 .top").css("display","block");
			var point = $(this).index();
			$.cookie(i,point);			
			$.ajax({
				type:"get",
				url:"json/question.json",
				
			}).then(function(res,b){
				setTimeout(function(){
				$(".main1 .top").css("display","none");
				},1000);
				var que = res.question;
				if(i<=4){
					
				$(".main1 .banner").html(que[i].banner);
				$(".main1 .time").html(que[i].time);
				$(".main1 .time1").html(que[i].time1);
				$(".main1 .a").html(que[i].a);
				$(".main1 .b").html(que[i].b);
				$(".main1 .c").html(que[i].c);
				$(".main1 .d").html(que[i].d);
				var img = que[i].img;
				
				$(".main1").css("background","url("+img+")");
				$(".main1").css("background-size","100% 100%");
					i++;
					
					console.log(i);
				}else{
					$(".main1").addClass("active");
					$(".main2").removeClass("active");
					time();
				  
				}
												
			})
			
		})
	
	
		
function time(){
		var story = "你一天所做的事";
            var s = document.getElementById('show');
            var i = 0;
            timer=setInterval(function(){
                s.innerHTML=story.substring(0,i);
                i++;
                if(s.innerHTML==story){
                    clearInterval(timer);
                }
            },200);
           
           
            setTimeout(function(){
            	var en = 24
            	var i = 0;
            	 t = setInterval(function(){
            		 var li = document.getElementsByClassName("li");
            		    
            			li[i].style.display = "block";
            			
            			i++
            			en=en-4;
            			$(".main2 .time").html(en+":00:00");
            			
            			if(i>=5){
            			$(".main2 .time").html("00:00:00")
            			clearInterval(t);
            		
            		}
            		
            	},1000)
            },2000)
            
            
		setTimeout(function(){
			 var story = "你的选择为你增加";
            var s = document.getElementById('show');
            var i = 0;
            timer=setInterval(function(){
                s.innerHTML=story.substring(0,i);
                i++;
                if(s.innerHTML==story){
                    clearInterval(timer);
                    var a=0;
                    var en = 13
                    t2 = setInterval(function(){
                    	 var p = document.getElementsByClassName("p");
            		    
            			p[a].style.display = "block";
            			a++
            			en = en+8
            			$(".main2 .time").html("01:"+en+":00")
            			
            			if(a>=5){
            			
            			$(".main2 .time").html("02:00:00")
            			$(".main2 .btn").css("display","block");
            			clearInterval(t2);
            		
            		}
                    },800)
                }
            },200);
		},8000)  
            
		
            
        
}
			
		            
        
	



			
}



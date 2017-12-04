		function starMove(obj,json,fn){

			clearInterval(obj.timer);

			obj.timer = setInterval(function(){
				var bStop = true;
				for(attr in json){
					var curr = parseFloat(getComputedStyle(obj,false)[attr]);					
					if(attr == 'opacity'){
						curr = Math.round(curr*100);
					}					
					var speed = (json[attr] - curr)/10;					
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(json[attr] != curr){
						bStop =false;
						if(attr == "opacity"){
							obj.style[attr] = (curr + speed)/100;
						}else{
							obj.style[attr] = curr + speed + "px";
						}
					}
					if(bStop){
						clearInterval(obj.timer);
						if(fn){
							fn();
						}
					}	
				}
			},30);
		}
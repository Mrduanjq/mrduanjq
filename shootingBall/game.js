;(function(){
	var game       = {//创建导演对象
		maxNumber  : 5,
		score      : 0, // 分数
		frameIndex : 0, // 运行的帧数
		start      : function(){ // 游戏开始
			this.load();    // 首先调用load方法
			gun.setInit();
			var that  = this, // 缓存this，因为后面要用到
				timer = setInterval(function(){
					that.frameIndex++; // 控制气球单个出现
					time.playTime();
					//气球
					if( that.frameIndex % 20 == 0 ){
						if( that.actors[0].length < that.maxNumber ){
							that.actors[0].push(new QQ());
						}else{
							//console.info('气球太多了，不生产了')
						}
					}
					for( var i = 0; i < that.actors[0].length; i++ ){
						that.actors[0][i].update();
						if(that.actors[0][i].y < -that.actors[0][i].height){
							that.actors[0][i].killSelf();
							console.info('重生了')
						}
					}
					//云朵
					for( var j=0; j<that.actors[1].length; j++ ){
						that.actors[1][j].update();
					}
			},50);
		},
		load       : function(){ // 加载演员
			var that = this;
			bg.setBg(); // 添加背景
			pointer.setInit();//初始化分数
			time.setInit(); // 初始化时间
			gun.setInit(); // 初始化枪
			
			//气球
			// for(var i=0; i<3; i++){
			// 	var q1 = new QQ();
			// 	this.actors[0].push(q1);
			// }

			document.body.onclick = function(e){
				//求出单击位置坐标与所有气球坐标之间的位置
				// console.info(e);
				var x = e.clientX;
				var y = e.clientY;
				
				for(var i=0; i<that.actors[0].length; i++){
					var obj = that.actors[0][i],
						qqx = obj.x + obj.width/2,
						qqy = obj.y + obj.height/2,
						d = Math.sqrt( Math.pow( x - qqx, 2 ) + Math.pow( y - qqy, 2 ) );
					//console.info(d);
					
					if( d < obj.width/2 ){
						obj.die();
						break;
					}
				}
			};

			document.body.onmousemove = function(e){
				var x = e.clientX - 48,
					y = e.clientY - 48;
				gun.moveTo(x,y);
				//console.info(x,y);
			}

			//云朵
			for(var j=0; j<3; j++){
				var yd = new cloud();
				this.actors[1].push(yd);
			}
			
		},
		actors     : [[],[]]
	};
	window.game    = game;
})()
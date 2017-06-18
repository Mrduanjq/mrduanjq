;(function(){
	function QQ(){ //创建气球构造器
		//气球位置坐标
		this.x      = Math.random()*( document.body.clientWidth - 96 );
		this.y      = 800;
		//气球编号
		this.number = Math.ceil( Math.random()*8 );
		//气球分数
		this.score  = this.number;
		// 气球速度(编号越大，速度越快)
		this.step   = this.number*1.5;
		//气球宽高
		this.width  = 96;
		this.height = 122;
		
		//创建一个元素
		this.ele    = document.createElement('div');

		//调用init方法
		this.init();
	}
	QQ.prototype.killSelf  = function(){
		this.x                            = Math.random()*(document.body.clientWidth - 96);
		this.y 							  = 800;
		this.number 					  = Math.ceil(Math.random()*8);
		this.score  					  = this.number;
		this.step   					  = this.score*1.5;

		this.ele.style.backgroundPosition = this.pos[this.number-1];
		this.ele.style.top  			  = this.y + 'px';
		this.ele.style.left 			  = this.x + 'px';
	}
	QQ.prototype.die       = function(){
		pointer.addScore(this.score); // 先进行传分值，再进行复位操作
		
		this.x  					      = Math.random()*(document.body.clientWidth - 96);
		this.y 							  = 800;
		this.number 					  = Math.ceil(Math.random()*8);
		this.score  		  			  = this.number;
		this.step   					  = this.score*1.5;

		this.ele.style.backgroundPosition = this.pos[this.number-1];
		this.ele.style.top   			  = this.y + 'px';
		this.ele.style.left  			  = this.x + 'px';
	}
	QQ.prototype.pos       = ['0px 0px','-95px 0px','-190px 0px','-285px 0px',
					'0px -123px','-95px -123px','-190px -123px','-285px -123px'
	];
	QQ.prototype.init      = function(){
		//初始化
		this.ele.style.position    		  = 'absolute';
		this.ele.style.top        		  = this.y + 'px';
		this.ele.style.left		  		  = this.x + 'px';

		//宽高
		this.ele.style.width 	   		  = this.width  + 'px';
		this.ele.style.height 	  		  = this.height + 'px';

		//背景图
		this.ele.style.background 		  = 'url(img/ballon.png) no-repeat';

		//背景定位
		this.ele.style.backgroundPosition = this.pos[this.number-1];
		
		//将创建的元素插入到body中
		document.body.appendChild(this.ele);
	};
	QQ.prototype.update    = function(){ // 气球的移动
		this.y             = this.y- this.step;
		this.ele.style.top = this.y + 'px';
	};
	window.QQ = QQ;
})()
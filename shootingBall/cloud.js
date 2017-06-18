;(function(){
	function cloud(){ // 创建云的构造器
		//位置坐标
		this.x 		= Math.random()*(document.body.clientWidth - 200);
		this.y 		= 50;

		//宽高
		this.height = 50 + Math.random()*80 ;
		this.width  = this.height * 2;

		//步长
		this.step   = 5 - Math.random()*10;
		//创建元素
		this.ele    = document.createElement('div');

		//调用一下初始化方法
		this.init();
	}
	cloud.prototype.init   = function(){
		//定位坐标
		this.ele.style.position        = 'absolute';
		this.ele.style.top		       = this.y + 'px';
		this.ele.style.left		 	   = this.x + 'px';

		//宽高
		this.ele.style.width 	  	   = this.width + 'px';
		this.ele.style.height 	  	   = this.height + 'px';

		//背景图
		this.ele.style.background  	   = 'url(img/多云.png) no-repeat';
		this.ele.style.backgroundSize  = '100% 100%';

		//调整z-index的值
		this.ele.style.zIndex 		   = '-1';

		//插入div元素
		document.body.appendChild( this.ele );
	}
	cloud.prototype.update = function(){
		if( this.x<0 || this.x > ( document.body.offsetWidth - this.width ) ){
			this.step       = this.step * -1;
		}
		this.x              = this.x - this.step;
		this.ele.style.left = this.x + 'px';
	}
	window.cloud = cloud;
})()
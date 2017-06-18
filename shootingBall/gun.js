;(function(){
	//枪的构建
	var gun    = {
		width   : 96,
		height  : 96,
		ele     : document.createElement('div'),
		setInit : function(){
			this.ele.style.position   = 'absolute';
			this.ele.style.width 	  = this.width + 'px';
			this.ele.style.height     = this.height + 'px';
			this.ele.style.zIndex     = '2';
			this.ele.style.background = 'url("img/gun(2).png") no-repeat';

			document.body.appendChild(this.ele); // 插入元素
		},
		moveTo: function(x,y){
			this.ele.style.left = x + 'px';
			this.ele.style.top  = y + 'px';
		}

	}
	window.gun = gun;
})()
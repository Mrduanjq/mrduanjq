;(function(){

	//分数的构建
	var pointer    = {
		height    : 60,
		width     : 100,
		ele       : document.createElement('div'),
		setInit   : function(){
			//定位
			this.ele.style.position = 'fixed';
			this.ele.style.top      = '20px';
			this.ele.style.left 	= '20px';
			this.ele.style.zIndex   = '2';
			this.ele.style.color    = 'hotpink';

			this.ele.style.width    = this.width + 'px';
			this.ele.style.height   = this.height + 'px';
			this.ele.innerHTML      = '分数：';
			document.body.appendChild(this.ele);
		},
		addScore  : function(n){
			game.score        += n;
			this.ele.innerHTML = '分数：' + game.score;
		}
	}
	window.pointer = pointer;
})()
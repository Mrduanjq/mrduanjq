;(function(){
	var time    = {
		ele:document.createElement('p'),
		width    : 100,
		height   : 30,
		setInit  : function(){
			this.ele.style.position = 'fixed';
			this.ele.style.top      = '30px';
			this.ele.style.left     = '20px';
			this.ele.style.zIndex   = '2';
			this.ele.style.color    = 'hotpink';
			document.body.appendChild(this.ele);
		},
		playTime : function(){
			this.ele.innerHTML = '游戏时间：' + game.frameIndex + ' ms';
		}
	}
	window.time = time;
})()
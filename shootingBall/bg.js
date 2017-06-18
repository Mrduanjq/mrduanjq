;(function(){
	var bg    = {//创建背景对象
		image : 'img/bg.jpg',
		setBg : function(){
			document.body.style.background = 'url('+this.image+') no-repeat ';
			document.body.style.backgroundSize = '100% 100%';
		}
	}
	window.bg = bg;
})()
var tools = {
	linearMove : function (obj, attr, end, time) {
		//把上一次的定时器清除，再挂在obj自定义属性上
		clearInterval(obj.timer);
		//获取起点值
		var start = parseInt(this.getStyle(obj, attr));
		//计算总距离
		var distance = end - start;
		//计算速度和运动步数，50ms为一步
		var steps = parseInt(time / 20);
		//计算px/步
		var speed = distance / steps;
		obj.timer = setInterval(function () {
			//往前走一步
			start += speed;
			obj.style[attr] = start + "px";
			//到终点的距离小于了一个速度的距离，那么就结束运动
			if(Math.abs(start - end) < Math.abs(speed)) {
				clearInterval(obj.timer);
				//有可能会超出一点，手动拉回来
				obj.style[attr] = end + "px";
			}
		},20);
		
	},

	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},

	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	

	beCenter : function (obj) {
		//显示
		obj.style.display = "block"
		//计算坐标
		let _this = this;
		function center () {
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		//窗口大小发生改变时重新计算坐标
		window.onresize = center;
	}
}
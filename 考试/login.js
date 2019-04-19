class Login{
	constructor (btn) {	
		this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}

	bindEvents () {
		let _this = this;
		//点击sendMessage创建div
		this.btn.onclick = function () {
			_this.container.innerHTML = '<h4>弹幕链接</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>内　容：<input id="content" type="content"></label></p>'+
			'<p><button id="sendBtn" class="sendBtn" type="button">发布弹幕</button></p>';
			tools.beCenter(_this.container);
			//生成模态层
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
		}

		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			var message = document.createElement("message");
			var body = document.querySelector("body")
			if(target.id === "closeBtn") {
				_this.container.style.display = "none";
				document.body.removeChild(_this.modal);
			}
			if(target.id === "sendBtn") {
				_this.container.style.display = "none";
				document.body.removeChild(_this.modal);
				_this.send();
				let username = document.querySelector("#username").value;
				let content = document.querySelector("#content").value;
				message.innerHTML = ("<br>" + username + "<br>" + content + "<br>");
				message.className = "message";
				body.appendChild(message);
			}
		}
	}
	send() {
		//求日期时间
		let username = document.querySelector("#username").value;
		let content = document.querySelector("#content").value;
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		//年月日
		let time = year+"-"+month+"-"+day;
	}


}
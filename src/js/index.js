//登录注册
	var res = document.querySelector('.res');
	var login = document.querySelector('.login');
	var pop_win = document.querySelector('#shade');
	var iphone = document.querySelector('.iphone');
	var use = document.querySelector('.use');
	var iphone_use = document.querySelector('.iphone_use');
	var iphone_pwd = document.querySelector('.iphone_pwd');
	var forget = document.querySelector('.forget');


	var new_res = document.querySelector('.new_res');
	var new_login = document.querySelector('.new_login');


	login.onclick = function(){
		pop_win.style.display = 'block';
	}
	iphone.onclick = function(){
		iphone_use.value ='';
		iphone_pwd.value = '';
		iphone.style.color = 'red';
		use.style.color = 'black';
		iphone_use.placeholder = '请输入手机号';
		iphone_pwd.placeholder = '请输入短信验证码';
		iphone_pwd.type = 'text';
		forget.innerHTML = '获取短信验证码';
		forget.style.color = 'red';
		iphone_pwd.style.width = 129 + 'px';
	}
	use.onclick = function(){
		iphone_use.value ='';
		iphone_pwd.value = '';
		iphone.style.color = 'black';
		use.style.color = 'red';
		iphone_use.placeholder = '请输入手机号/账号';
		iphone_pwd.placeholder = '请输入密码';
		iphone_pwd.type = 'password';
		forget.innerHTML = '忘记密码';
		iphone_pwd.style.width = 160 + 'px';
	}
	res.onclick = function(){
		shade_res.style.display = 'block';
	} 
	new_login.onclick = function(){
		pop_win.style.display = 'block';
		shade_res.style.display = 'none';
	}
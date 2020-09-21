var iphone_use = document.querySelector('.iphone_use');
var iphone_pwd = document.querySelector('.iphone_pwd');
var login_btn = document.querySelector('#login_btn');
var cookie = $.cookie(name);
var shade = document.querySelector('#shade');
login_btn.onclick = function(){
    var user = iphone_use.value;
    var pwd = iphone_pwd.value;
    for(var k in cookie){
        console.log(k + ',' + cookie[k]);
    }
    if (user in cookie) {
        if (pwd != cookie[user]) {
                alert('密码不正确');
                return;
            }else{
                shade.style.display = 'none';
                return;
            }
    }else{
         alert('用户名不存在');
    }
        // console.log('cookie:' + key,cookie[key]);
}

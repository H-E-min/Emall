var new_res = document.querySelector('.new_res');
var new_login = document.querySelector('.new_login');
var add_user = document.querySelector('.add_user');
var add_pwd = document.querySelector('.add_pwd');
var res_btn = document.querySelector('#res_btn');

res_btn.onclick = function(){
    var res_name = /^\w{3,8}$/;
    var name = add_user.value;
    var pwd = add_pwd.value;
    console.log(name + ',' + pwd);
    if (!name ||!pwd) {
        alert('请输入用户名或密码');
    }else if(!res_name.test(name)){
        alert('请输入3-8位用户名');
    }else{
        $.cookie(name,pwd,{expires:7,path:'/'});
        alert('注册成功');

    }
    add_user.value = '';
    add_pwd.value = '';
    console.log(cookie);
}

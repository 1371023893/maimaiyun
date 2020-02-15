/*
麦麦云网站访问控制系统V1.0    好麦麦源码网旗下:http://www.haomaim.cn
项目地址:https://github.com/1784605674/maimaiyun
作者:若旧  QQ:1784605674
声明:此程序请勿用于非法用途,否则产生任何后果与开发者无关!
*/
$(function(){
	function modelAlert(title,content,href = false){
			$('#model').click();
			$('#title').text(title);
			$('#content').text(content);
			if(href !== false){
				setTimeout(function(){
					window.location.href=href;
				},3000);
			}
	}
	
	const editPass = new Vue({
		el:'#edit_pwd',
		data:{
			pwd:'',
			newpwd:'',
			name:''
		},
		methods:{
			editPass(){
				//判断是否修改用户名
				if(this.name == ""){
					//判断旧密码输入框是否为空
					if(this.pwd !== ""){
						//判断新密码是否输入
						if(this.newpwd !== ""){
							this.$http.post('controller/editPass.php',{pass:this.pwd,newpass:this.newpwd},{emulateJSON:true}).then(res=>{
									if(res.body == "false"){
										 modelAlert('温馨提示','原密码输入错误!');
									}else if(res.body == 0){
										 modelAlert('温馨提示','新密码和原密码相同,本次操作未做任何修改!');
									}else{
										 modelAlert('温馨提示','密码修改成功!\n 3秒后自动跳转至登录页面登录','login.html');
									}
							})
						}else{
							modelAlert('温馨提示','请输入新密码!');
						}
					}else{
						modelAlert('温馨提示','请输入原来的密码!');
					}
				}else{
					//判断旧密码输入框是否为空
					if(this.pwd !== ""){
						//判断新密码是否输入
						if(this.newpwd !== ""){
							this.$http.post('controller/editPass.php',{pass:this.pwd,newpass:this.newpwd,user:this.name},{emulateJSON:true}).then(res=>{
								console.log(res)
								if(res.body == "false"){
									 modelAlert('温馨提示','原密码输入错误!');
								}else if(res.body == "editfalse"){
									 modelAlert('温馨提示','修改失败!可能是因为用户名或密码没有做任何修改');
								}else{
									 modelAlert('温馨提示','修改成功!\n 3秒后自动跳转至登录页面登录','login.html');
								}
							})
						}else{
							modelAlert('温馨提示','请输入新密码!');
						}
					}else{
						modelAlert('温馨提示','请输入原来的密码!');
					}
				}
			}
		}
	})
})
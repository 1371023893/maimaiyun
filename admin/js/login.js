$(function(){
	function modelAlert(title,content,href = false){
			$('#model').click();
			$('#title').text(title);
			$('#content').text(content);
			if(href !== false){
				setTimeout(function(){
					window.location.href=href;
				},1500);
			}
	}
	
	
	const login = new Vue({
		el:'#loginForm',
		data:{
			username:'',
			password:'',
			yzcode:'',
			yz_code:''
		},
		methods:{
			login(){
				//判断用户名或密码是否输入
				if(this.username == "" || this.password == ""){
					 modelAlert('温馨提示','请输入登录用户名或密码');
				}else{
					//判断验证码是否输入
					 if(this.yz_code !== ""){
						 //判断验证码是否填写正确
						 if(this.yz_code.toUpperCase() == this.yzcode.toUpperCase()){
								this.$http.post('controller/login.php',{user:this.username,pass:this.password},{emulateJSON:true}).then(res=>{
									if(res.body !== "false"){
										 modelAlert('温馨提示','欢迎回来! \n3秒后将自动跳转到控制台',res.body);
									}else{
										 modelAlert('温馨提示','账号或密码错误!');	
									}
								})
						 }else{
							 modelAlert('温馨提示','验证码错误!');
						 }
					 }else{
						 modelAlert('温馨提示','请输入验证码');
					 }
				}
			}
		},
		//验证码
		created(){
			let codeStr='ABCDEFGHIGKLMNPQRSTUVWXYZ123456789';
			for(let i=0;i<4;i++){
					let rand=Math.floor(Math.random()*codeStr.length);
					this.yzcode +=codeStr[rand];
			}
		}
	})
})
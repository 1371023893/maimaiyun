//弹窗提示封装
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
	
	const veriFication=new Vue({
				el:'#Verification',
				data:{
					title:'请输入访问密钥',
	        submit:'立即访问',
					code:''
				},
				methods:{
					yzCode(){
						if(this.code == ""){
							 modelAlert('温馨提示','密钥不能为空!');
						}else{
							this.$http.post('Model/veriFication.php',{code:this.code}, {emulateJSON:true}).then(function(res){
								if(res.body == "false"){
									 modelAlert('温馨提示','密钥错误');
								}else if(res.body == "datefalse"){
									 modelAlert('温馨提示','密钥已过期');
								}else{
									 modelAlert('温馨提示','恭喜你!密钥输入正确\n\n\n3秒后将自动跳转',res.body);
								}
							})
						}
					}
				}
		})
})



/*
麦麦云网站访问控制系统V1.0    好麦麦源码网旗下:http://www.haomaim.cn
项目地址:
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
				},1500);
			}
	}
	
	
	const index=new Vue({
		el:'#index',
		data:{
			codeNums:'',
			php:'',
			windows:''
		},
		created(){
			this.$http.get('controller/code_nums.php').then(res=>{
				if(res.body['inc'] !==false ){
						this.codeNums = res.body['codeNum'];
						this.php = res.body['php'];
						this.windows = res.body['window'];
				}else{
					modelAlert('非法访问','请先登录',res.body['login']);
				}
			})
		}
	})
})
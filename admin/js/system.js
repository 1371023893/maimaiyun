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
	
	//系统设置
	const preserved=new Vue({
		el:'#preserved',
		data:{
			dirname:'',
			sqldir:''
		},
		methods:{
			preserve(){
				if(this.dirname == ""){
					modelAlert('温馨提示','网站跳转路径不能为空!');
				}else{
					if(this.dirname.length <= 60){
						this.$http.post('model/system.php',{dir:this.dirname},{emulateJSON:true}).then(res=>{
							//判断是否保存成功
							if(res.body == 1){
								 modelAlert('温馨提示','保存成功!');
							}else{
								 modelAlert('温馨提示','保存失败!可能是因为本次没有做任何修改操作');
							}
						})
					}else{
						modelAlert('温馨提示','跳转路径字段过长,不允许超过60个字符!');
					}
				}
			}
		},
		created(){
			this.$http.get('model/Getdir.php').then(res=>{
				if(res.body['inc'] !== false){
					this.dirname = res.body.system['dirname'];
				}else{
					 modelAlert('非法访问','请先登录',res.body['login']);
				}
			})
		}
	})
})
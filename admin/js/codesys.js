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
	
	const tbody=new Vue({
		el:'#tbody',
		data:{
			product:[],
			addtime:''
		},
		methods:{
			//时间格式化
			dateTime(time){
				let data=new Date(parseInt(time)*1000);
				let year=data.getFullYear();
				let month=data.getMonth()+1;
				month=month>10 ? month : '0'+month;
				let day=data.getDate();
				day=day>10 ? day : '0'+day;
				let hours=data.getHours();
				hours=hours>10 ? hours : '0'+hours;
				let minuters=data.getMinutes();
				minuters=minuters>10 ? minuters : '0'+minuters;
				let sends=data.getSeconds();
				sends=sends>9 ? sends : '0'+sends;
				return year+'年'+month+'月'+day+'日 '+hours+':'+minuters+':'+sends;
			},
			//删除密钥
			deleteCode(index){
				//获取当前点击删除的密钥ID
				let deleteId=this.product[index]['id'];
				//提交到服务端
				this.$http.post('model/delete_code.php',{dele:deleteId},{emulateJSON:true}).then(function(res){	
					if(res.body == 1){
						 modelAlert('温馨提示','密钥删除成功!');
						 setTimeout(function(){
						 						location.reload();
						 },1500);
					}else{
						 modelAlert('温馨提示','密钥删除失败!');
					}
				})
			}
		},
		created(){
			//初始化数据
			this.$http.get('controller/codesys.php').then(function(res){
				if(res.body['inc'] !==false){
					this.product = res.body.arr;
				}else{
					modelAlert('非法访问','请先登录',res.body['login']);
				}
			})
		}	
	})
	
	//生成密钥
	const addCode = new Vue({
		el:'#add',
		data:{
			option:[
				{id:0,val:'请选择密钥有效期'},
				{id:7,val:'7天'},
				{id:30,val:'30天'},
				{id:180,val:'180天'},
				{id:360,val:'360天'}
			],
			code:'',
			active:0
		},
		methods:{
			//获取选择的天数
			change(event){
				this.active = event.target.value;
			},
			//生成密钥
			showCode(){
				if(this.code == "" || this.code == 0){
					modelAlert('温馨提示','密钥个数不能为空或0!');
				}else{
					if(this.active == 0){
						modelAlert('温馨提示','请选择密钥有效期!');
					}else{
						//密钥和有效期都不为空时
						this.$http.post('model/add_code.php',{codeNum:this.code,timeNum:this.active},{emulateJSON:true}).then(function(res){
							if(res.body == "true"){
								 modelAlert('温馨提示','恭喜您,密钥生成成功!');
								 setTimeout(function(){
									 location.reload();
								 },1500);
							}else{
								 modelAlert('温馨提示','密钥生成失败!');
							}
						})
					}
				}
				
			}
		}
	})
})

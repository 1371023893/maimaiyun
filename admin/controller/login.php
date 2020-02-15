<?php
//连接数据库
include '../../config/Database.php';

//获取管理员登录信息
$username=$_POST['user'];
$password=md5($_POST['pass']);
// $yz_code=$_POST['yz_code'];

$sql="SELECT username,password FROM admin WHERE username=:username AND password=:password";
$args=[':username' => $username,':password' => $password];
$DB=new DB;
$bool=$DB->fetch($sql,$args);

//判断是否登陆成功
if ($bool !== false) {
	//设置cookie
	setcookie('admin',$username,time()+3600*24*7,'/');
	echo "index.html";
}else{
	echo "false";
}
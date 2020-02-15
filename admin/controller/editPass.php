<?php
include '../../config/Database.php';

//旧密码
$pass = md5($_POST['pass']);

//修改的新密码
$newpass = md5($_POST['newpass']);

//修改的用户名
$username = $_POST['user'];

//数据库操作
$DB = new DB;

//判断是否修改用户名
if(!isset($username)){
	// echo "不修改用户名";
	$yzsql = "SELECT password FROM admin WHERE password = :password";
	$args = [':password' => $pass];

	$yzcode = $DB->fetch($yzsql,$args);
	//判断旧密码是否正确
	if($yzcode !== false){
		//修改为新的密码
		$newsql = "UPDATE admin SET password = :password WHERE id = :id";
		$newargs =[':password' => $newpass, ':id' => 1];

		$bool = $DB->exec($newsql,$newargs);
		echo $bool;

		//修改密码成功后,清除cookie
		if($bool){
			setcookie('admin','',0,'/');
		}
	}else{
		echo "false";
	}
}else{
	// echo "修改用户名";
	$yzsql = "SELECT password FROM admin WHERE password = :password";
	$args = [':password' => $pass];

	$yzcode = $DB->fetch($yzsql,$args);
	//判断旧密码是否正确
	if($yzcode !== false){
		//修改用户名
		$newusersql = "UPDATE admin SET username = :username WHERE id = :id";
		$newuserargs = [':username' => $username, ':id' => 1];

		$userbool = $DB->exec($newusersql,$newuserargs);

		//修改为新的密码
		$newsql = "UPDATE admin SET password = :password WHERE id = :id";
		$newargs =[':password' => $newpass, ':id' => 1];

		$bool = $DB->exec($newsql,$newargs);

		
		//修改成功后,清除cookie
		if($userbool && $bool){
			echo $bool;
			setcookie('admin','',0,'/');
		}else{
			echo "editfalse";
		}
	}else{
		echo "false";
	}
}


<?php
include 'class/Code.php';
include '../../config/Database.php';

date_default_timezone_set('Asia/ShangHai');

$code_num=$_POST['codeNum'];
$account=time()+3600*24*$_POST['timeNum'];
$timer=time();

//生成密钥
$c=Code::regCode($code_num);
//写入数据库
$DB=new DB;
$sql="INSERT passkey(codekey,addtime,exdata) VALUES(:codekey,:addtime,:exdata)";

foreach ($c as $value) {

	$args=[':codekey'=>$value,':addtime'=>$timer,':exdata'=>$account];

	//判断是否生成成功
	$bool=$DB->exec($sql, $args);
}

if ($bool>0) {
	echo "true";
}else{
	echo "false";
}
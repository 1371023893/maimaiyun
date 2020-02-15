<?php
include '../config/Database.php';

//获取密钥正确后跳转的路径
$dir_sql="SELECT dirname FROM system";
//链接数据库
$DB=new DB;
$dirname=$DB->fetch($dir_sql)['dirname'];

//核对密钥是否正确
$code = $_POST['code'];

$sql='SELECT codekey,exdata FROM passkey WHERE codekey=:code';
$args=[':code'=>$code];

$key=$DB->fetch($sql,$args);

if ($key['codekey'] == $code) {

	if ($key['exdata'] > time()) {
		//设置cookie
		setcookie('code',$code,time()+3600*2,'/');
		echo "{$dirname}";

	}else{

		echo "datefalse";
	}
	
}else{

	echo "false";

}
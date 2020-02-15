<?php
include '../../config/access.php';
include '../../config/Database.php';

$sql="SELECT COUNT(id) AS codes FROM passkey";

$DB=new DB;
//获取密钥总数量
$codeNum = $DB->fetch($sql)['codes'];

//PHP版本号
$php = PHP_VERSION;

//当前系统
$window = PHP_OS;

$arr=['codeNum' => $codeNum, 'php' => $php, 'window' => $window,'inc' =>$inc ,'login' => 'login.html'];

echo json_encode($arr);
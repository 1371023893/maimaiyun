<?php
include '../../config/Database.php';
include '../../config/access.php';

date_default_timezone_set('Asia/ShangHai');
$sql='SELECT * FROM passkey';
$DB=new DB;
$count=$DB->fetchAll($sql);

$arr=[];
$index=0;
foreach ($count as  $value) {
	$arr[$index] = $value;
	$index++;
}

$array=['arr' => $arr,'inc' => $inc ,'login' => 'login.html'];

echo json_encode($array);
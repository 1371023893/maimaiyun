<?php
include '../../config/Database.php';
include '../../config/access.php';

$sql="SELECT * FROM system";

$DB=new DB;

$arr=['system' =>$DB->fetch($sql),'inc' => $inc,'login' => 'login.html'];
echo json_encode($arr);
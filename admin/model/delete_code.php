<?php
include '../../config/Database.php';
//获取要删除的密钥ID
$deleteId=$_POST['dele'];

$sql="DELETE FROM passkey WHERE id=:id";

$args=[':id'=>$deleteId];

$DB=new DB;

echo $DB->exec($sql,$args);